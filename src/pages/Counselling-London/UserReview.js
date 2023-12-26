import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import Alertdialog from "../../components/AlertDiaolog/Alertdialog";


const validationSchema = Yup.object({
  sendername: Yup.string().required("Sender Name is required"),
  rating: Yup.number()
    .required("Rating is required")
    .min(1, "Rating must be at least 1")
    .max(5, "Rating must be at most 5"),
    editor: Yup.string().required("Detail  is required"),

});
const UserReview = () => {
  const { loading, pictureLink } = useMyContext();
  const [ckeditorContent, setCkeditorContent] = useState("");
  const [openReview, setOpenReview] = React.useState(false);
  const [singleUsersData, setSingleUsersData]= useState('');
  const [ratingValue, setRatingValue] = useState(0);
  const [editor, setEditor] = useState(null);
  const [key, setKey] = useState(0);
  const navigate = useNavigate();


  const maxDetailLength = 848;

  const { id } = useParams();

  const user =
  singleUsersData &&
  singleUsersData.find((user) => user.id === parseInt(id, 10));

  console.log("user", user);

  const handleCkeditorChange = (event, editor) => {
    const data = editor.getData();
    setCkeditorContent(data);
  };

  const handleCloseReview = () => {
    setOpenReview(false);
  };

  const removePTags = (htmlString) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const textContent = doc.body.textContent || "";
    return textContent.replace(/\\/g, ""); //
  };

  const GetSingleUserData = () => {
    let param = {
      id:id
    }
    postRequest(
      '/getsingleuserdata',
      param,
      (response) => {
        // setLoading(true);
        console.log("SingleResponse", response)
        if (response?.data?.status === 'success') {
          setSingleUsersData(response?.data?.data);
        }
        // setLoading(false);
      },
      (error) => {
        console.log(error?.response?.data);
        // setLoading(false);
      }
    );
  };

  useEffect(()=>{
    GetSingleUserData();
  },[]);
  
  useEffect(() => {
    if (editor && editor.resetData) {
      editor.resetData(); // Reset CKEditor content to an empty string
    }
  }, [editor, key]);
  const handleSubmit = (data, setSubmitting, resetForm) => {
    let params = {
      userid: id,
      rating: data.rating,
      sender_name: data.sendername,
      detail: ckeditorContent,
    };
    console.log("params", params);
    postRequest(
      "/addreviews",
      params,
      (response) => {
        console.log("addreviewsResponse", response);
        if (response?.data?.status === "success") {
          console.log("data added successfully");
          setOpenReview(true);
          resetForm();
          setKey((prevKey) => prevKey + 1);
          if (editor && editor.setData) {
            editor.setData("");
          }
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
          width: "95%",
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
                  {removePTags(user?.detail).length > maxDetailLength
                    ? `${removePTags(user?.detail).substring(
                        0,
                        maxDetailLength
                      )}...`
                    : removePTags(user?.detail)}
                  {removePTags(user?.detail).length > maxDetailLength ? (
                    <span
                      style={{ color: "blue", cursor: "pointer" }}
                        onClick={() =>
                          navigate(`/user-detail/${user.id}`, {
                            state: { singleUsersData, pictureLink },
                          })
                        }
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
                  rating: 0,
                  sendername: "",
                  editor: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(data, { setSubmitting, resetForm }) => {
                  console.log("formikData", data);
                  handleSubmit(data, setSubmitting, resetForm);
                  setRatingValue(0);
                }}
              >
                {({ isSubmitting, setFieldValue,setFieldError,setFieldTouched }) => (
                  <Form>
                    <Typography sx={{textAlign:"center", fontSize:"25px"}}>Add Reviews</Typography>
                    <Box sx={{ minHeight: "50px",textAlign:"center", p:"10px" }}>
                      <Rating
                        sx={{ minHeight: "40px", fontSize: "35px" }}
                        name="rating"
                        value={ratingValue}
                        onChange={(event, newValue) => {
                          setFieldValue("rating", newValue);
                          setRatingValue(newValue);
                        }}
                      />
                      <FormHelperText
                        sx={{ color: "red", m: 0, fontSize: "16px" }}
                      >
                        <ErrorMessage name="rating" />
                      </FormHelperText>
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
                        key={key}
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
                          setEditor(editor);
                        }}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          handleCkeditorChange(event, editor);
                          setFieldValue("editor", data); // Update the Formik state with the CKEditor content
                          setFieldTouched("editor", true); // Mark the field as touched
                          setFieldError("editor", !data ? "Editor content is required" : ""); // Set error if content is empty
                        }}
                      />
                      <FormHelperText
                        sx={{ color: "red", m: 0, fontSize: "16px" }}
                      >
                        <ErrorMessage name="editor" />
                      </FormHelperText>
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
        <Alertdialog
          openReview={openReview}
          handleCloseReview={handleCloseReview}
        />
      </Box>
    </>
  );
};

export default UserReview;
