import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/material/Typography";
import * as Yup from "yup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Button } from "@mui/joy";
import Div from "../../shared/Div";
import { useMyContext } from "../../components/context-user-data/ContextUserData";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { FormHelperText, TextField, Grid, Rating } from "@mui/material";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { postRequest } from "../../backendservices/ApiCalls";

const validationSchema = Yup.object({
    sendername: Yup.string().required("Sender Name is required"),
});
const UserReview = () => {
  const { loading, pictureLink, usersProfileData } = useMyContext();
  const [ckeditorContent, setCkeditorContent] = useState("");
  console.log("usersProfileData", usersProfileData);
  const maxDetailLength = 648;
  const { id } = useParams();
  const user =
    usersProfileData &&
    usersProfileData.find((user) => user.id === parseInt(id, 10));
  console.log("user", user);
  const handleCkeditorChange = (event, editor) => {
    const data = editor.getData();
    setCkeditorContent(data);
  };
  const removePTags = (htmlString) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const textContent = doc.body.textContent || "";
    return textContent.replace(/\\/g, ""); //
  };
  const handleSubmit = (data, setSubmitting, resetForm) => {
    let params = {
        userid:id,
        rating: data.rating,
        sender_name : data.sendername,
        detail: ckeditorContent
    };
    console.log("params", params);
    postRequest(
      "/addreviews",
      params,
      (response) => {
        console.log("addreviewsResponse", response);
        if (response?.data?.status === "success") {
          console.log("data added successfully");
        //   setOpen(true);
          resetForm();
          // setIsSubmitted(true);
          // setTimeout(() => {
          //     setIsSubmitted(false);
          // }, 3000);
        //   getUserData();
        //   refreshUserData();
        } else {
          console.log("response not getting");
        }
      },
      (error) => {
        console.log(error?.response?.data);
      }
    );
  };
  if (!user && loading) {
    return <div>User not found</div>;
  }
  return (
    <>
      <Box
        sx={{
          width: "90%",
          position: "relative",
          margin: "auto",
          overflow: { xs: "auto", sm: "initial" },
          mb: 5,
        }}
      >
        {/* <Grid> */}
        <Div sx={{ padding: "20px" }}>
          <h1>Counselling in London</h1>
        </Div>
        <Grid container spacing={2}>
          <Grid item sm={8}>
            <Card
              orientation="horizontal"
              sx={{
                flexWrap: "wrap",
                marginBottom: "5px",
                [`& > *`]: {
                  "--stack-point": "500px",
                  minWidth:
                    "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
                },
                resize: "horizontal",
                "&:hover": {
                  cursor: "pointer",
                  boxShadow: "6px 0 6px #ccc",
                },
              }}
            >
              <Box
                flex={1}
                minHeight={250}
                sx={{
                  minWidth: 182,
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={`${pictureLink}${user?.profilepic}`}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                  }}
                  alt=""
                />
              </Box>
              <CardContent sx={{ flex: "30%" }}>
                <h2
                  style={{
                    color: "#477be4",
                    fontSize: "26px",
                    fontFamily:
                      "Proxima Nova,Open Sans,Helvetica Neue,Arial,sans-serif",
                  }}
                >
                  {user?.firstname}
                </h2>
                <Typography
                  level="body-sm"
                  fontWeight="lg"
                  textColor="text.tertiary"
                >
                  {user?.education}
                </Typography>
                <Typography
                  level="body-sm"
                  fontWeight="lg"
                  textColor="text.tertiary"
                >
                  {user?.user_type}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "17px",
                    fontFamily:
                      "Proxima Nova,Open Sans,Helvetica Neue,Arial,sans-serif",
                  }}
                >
                  {removePTags(user.detail).length > maxDetailLength
                    ? `${removePTags(user.detail).substring(
                        0,
                        maxDetailLength
                      )}...`
                    : removePTags(user.detail)}
                  {removePTags(user.detail).length > maxDetailLength ? (
                    <span
                      style={{ color: "blue", cursor: "pointer" }}
                    //   onClick={() =>
                    //     navigate(`/user-detail/${value.id}`, {
                    //       state: { therapists, pictureLink },
                    //     })
                    //   }
                    >
                      Read More
                    </span>
                  ) : null}
                </Typography>
              </CardContent>
              <CardContent sx={{ flex: "10%" }}>
                <h1>{user?.mobile}</h1>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    backgroundColor: "white",
                    color: "dark",
                    border: "1px solid lightgray",
                    padding: "10px",
                    marginTop: 2,
                  }}
                >
                  Email
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    backgroundColor: "white",
                    color: "dark",
                    border: "1px solid lightgray",
                    padding: "10px",
                    marginTop: 2,
                  }}
                >
                  View
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={4}>
            <Card>
              <Formik
                initialValues={{
                    rating:0,
                    sendername: "",
                    editor:"",
                }}
                validationSchema={validationSchema}
                onSubmit={(data, { setSubmitting, resetForm }) => {
                    console.log("formikData", data)
                  handleSubmit(data, { setSubmitting, resetForm });
                }}
              >
                {({ isSubmitting, setFieldValue }) => (
                  <Form>
                    <Box sx={{ minHeight: "50px" }}>
                      <Rating
                        sx={{ minHeight: "40px", fontSize:"35px" }}
                        name="rating"
                        onChange={(event, newValue) => {
                          setFieldValue("rating", newValue);
                        }}
                      />
                    </Box>
                    <Box>
                      <Field
                        id="sendername"
                        name="sendername"
                        type="text"
                        as={TextField}
                        fullWidth
                        label="Sender Name"
                        helperText={
                          <FormHelperText
                            sx={{ color: "red", m: 0, fontSize: "16px" }}
                          >
                            <ErrorMessage name="sendername" />
                          </FormHelperText>
                        }
                      />
                    </Box>

                    <Box mt={1}>
                      <CKEditor
                      name="editor"
                        editor={ClassicEditor}
                        className="ck-editor__editable"
                        data=""
                        onInit={(editor) => {
                          editor.editing.view.change((writer) => {
                            writer.setStyle(
                              "height",
                              "200px",
                              editor.editing.view.document.getRoot()
                            );
                          });
                        }}
                        onChange={(event, editor) =>
                          handleCkeditorChange(event, editor)
                        }
                      />
                    </Box>

                    <Box pt={2}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                          background: "#FFA500",
                          height: "45px",
                          borderRadius: "15px",
                        }}
                      >
                        Submit
                      </Button>
                    </Box>
                  </Form>
                )}
              </Formik>
            </Card>
          </Grid>
        </Grid>
        {/* </Grid> */}
      </Box>
    </>
  );
};

export default UserReview;
