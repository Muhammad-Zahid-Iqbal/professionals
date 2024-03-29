import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Grid, TextField, Button, Box, FormHelperText, IconButton, Avatar, Select, MenuItem, InputLabel, FormControl, Rating, Typography,} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { postRequest } from "../../backendservices/ApiCalls";
import { useLocation } from "react-router-dom";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useMyContext } from "../../components/context-user-data/ContextUserData";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Alertdialog from "../../components/AlertDiaolog/Alertdialog";
import Div from "../../shared/Div";
import CopyLink from "./CopyLink";
import { Card } from "@mui/joy";
import StarIcon from "@mui/icons-material/Star";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  education: Yup.string().required("Education is required"),
  phone: Yup.string().required("Phone is required"),
  city: Yup.string().required("City is required"),
  address: Yup.string().required("Address is required"),
  postcode: Yup.number().required("Post Code is required"),
});

const Dashboard = () => {
  const [ckeditorContent, setCkeditorContent] = useState("");
  const [open, setOpen] = React.useState(false);
  const [load, setLoad] = React.useState(true);
  const [reviewData, setReviewData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    loginUserData,
    loading,
    userprofile,
    setLoading,
  } = useMyContext();
  const [selectedImage, setSelectedImage] = useState("");
  const rowData = loginUserData;

  const [selectedLocation, setSelectedLocation] = React.useState();
  const location = useLocation();

  const useremail = location?.state?.useremail;

  useEffect(() => {
    if (userprofile !== null) {
      setSelectedImage(userprofile);
    }
    setLoad(false);
  }, [userprofile]);

  const handleChangeSelect = (event) => {
    // setSelectedLocation(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const formatPhoneNumber = (value) => {
    // Remove non-numeric characters
    const phoneNumber = value.replace(/\D/g, "");

    // Add the country code (you can customize this based on your needs)
    const formattedPhoneNumber = `+92 ${phoneNumber}`;

    return formattedPhoneNumber;
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64Data = reader.result;
        if (base64Data) {
          setSelectedImage(base64Data);
          let params = {
            image: selectedImage,
          };
          postRequest(
            "/updateprofilepicture",
            params,
            (response) => {
              console.log("responseImage", response);
              if (response?.data?.status === "success") {
                setLoading(true);
                setSelectedImage(response?.data?.pictureurl);
                console.log("data added successfully");
                setLoading(false);
              } else {
                console.log("response not getting");
              }
            },
            (error) => {
              console.log(error?.response?.data);
              setLoading(false);
            }
          );
          console.log("Image loaded successfully!", base64Data);
        } else {
          console.log("Error loading image.");
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleCameraClick = () => {
    document.getElementById("fileInput").click();
  };
  const GetReviews = () => {
    let param = {
      userid: rowData?.userid,
    };
    postRequest(
      "/getreviews",
      param,
      (response) => {
        setIsLoading(true);
        if (response?.data?.status === "success") {
          setReviewData(response?.data?.data);
        }
        setIsLoading(false);
      },
      (error) => {
        console.log(error?.response?.data);
        setIsLoading(false);
      }
    );
  };

  useEffect(() => {
    GetReviews();
  }, [rowData?.userid]);

  const handleSubmit = (data, setSubmitting, resetForm) => {
    let params = {
      // image: selectedImage,
      education: data.education,
      user_type: data.type,
      email: useremail || data.email,
      mobile: data.phone,
      city: data.city,
      detail: ckeditorContent,
      address: data.address,
      postcode: data.postcode,
    };
    postRequest(
      "/updateuserdata",
      params,
      (response) => {
        if (response?.data?.status === "success") {
          console.log("data added successfully");
          setOpen(true);
          // getUserData();
        } else {
          console.log("response not getting");
        }
      },
      (error) => {
        console.log(error?.response?.data);
      }
    );
  };
  useEffect(() => {
    // Initialize CKEditor content with data from API
    setCkeditorContent(rowData?.detail || "");
  }, [rowData]);

  const handleCkeditorChange = (event, editor) => {
    const data = editor.getData();
    setCkeditorContent(data);
  };
  if (loading && !rowData) {
    return <h1>Loading...</h1>;
  }
  if (load) {
    return <h1>Loading...</h1>;
  }
  if (!loading && rowData) {
    return (
      <>
        <Formik
          initialValues={{
            // image: selectedImage,
            name: rowData?.firstname || "",
            email: useremail || rowData?.email || "",
            education: rowData?.education || "",
            type: rowData?.user_type || "",
            phone: rowData?.mobile || "",
            city: rowData?.city || "",
            // detail: rowData?.detail || "",
            address: rowData?.address || "",
            postcode: rowData?.postcode || "",
          }}
          validationSchema={validationSchema}
          onSubmit={(data, { setSubmitting, resetForm }) => {
            handleSubmit(data, { setSubmitting, resetForm });
          }}
        >
          {({ setFieldValue }) => (
            <Form>
              <CopyLink userLoginID={rowData?.userid} reviewData={reviewData}  userID={rowData?.userid}/>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} sx={{ margin: "auto" }}>
                  <Div>
                    <Box
                      sx={{
                        display: "flex",
                        cursor: "pointer",
                        justifyContent: "center",
                        position: "relative",
                      }}
                      p={1}
                      width={"160px"}
                      margin={"auto"}
                      mt={2}
                      onClick={handleCameraClick}
                    >
                      {selectedImage ? (
                        <img
                          src={selectedImage}
                          alt="Image Preview"
                          style={{
                            cursor: "pointer",
                            border: "1px solid lightgrey",
                            width: "140px",
                            height: "140px",
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <Avatar
                          sx={{
                            width: "140px",
                            height: "140px",
                            borderRadius: "50%",
                            backgroundColor: "#f2f2f2",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <PhotoCameraIcon fontSize="large" color="action" />
                        </Avatar>
                      )}
                      <input
                        id="fileInput"
                        type="file"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                        capture="environment"
                      />
                      <IconButton
                        sx={{
                          position: "absolute",
                          bottom: "10px",
                          right: "20px",
                          background: "lightblue",
                        }}
                        component="span"
                        size="small"
                        color="success"
                      >
                        <PhotoCameraIcon />
                      </IconButton>
                    </Box>
                  </Div>
                  <Grid container spacing={2} padding={2}>
                    <Grid item sm={6} xs={12}>
                      <Box>
                        <Field
                          id="name"
                          name="name"
                          type="text"
                          as={TextField}
                          fullWidth
                          label="Name"
                          sx={{ background: "lightgrey" }}
                          InputProps={{
                            readOnly: true,
                          }}
                        />
                      </Box>
                    </Grid>

                    <Grid item sm={6} xs={12}>
                      <Box>
                        <Field
                          id="email"
                          name="email"
                          type="email"
                          as={TextField}
                          fullWidth
                          label="Email"
                          sx={{ background: "lightgrey" }}
                          InputProps={{
                            readOnly: true,
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Box>
                        <Field
                          id="education"
                          name="education"
                          type="text"
                          as={TextField}
                          fullWidth
                          label="Education"
                          helperText={
                            <FormHelperText
                              sx={{ color: "red", m: 0, fontSize: "16px" }}
                            >
                              <ErrorMessage name="education" />
                            </FormHelperText>
                          }
                        />
                      </Box>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Box>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Type
                          </InputLabel>
                          <Select
                            inputProps={{
                              MenuProps: { disableScrollLock: true },
                            }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="type"
                            value={selectedLocation || rowData?.user_type}
                            label="Type"
                            onChange={(event) => {
                              // handleChangeSelect(event);
                              setFieldValue("type", event.target.value); // Update the Formik field
                              setSelectedLocation(event.target.value);
                            }}
                            required
                          >
                            <MenuItem value="Tutors">Tutors</MenuItem>
                            <MenuItem value="Assessors">Assessors</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Box>
                        <Field
                          id="phone"
                          name="phone"
                          type="tel"
                          parse={formatPhoneNumber} // This function formats the phone number when parsing
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              label="Phone"
                              helperText={
                                <FormHelperText
                                  sx={{ color: "red", m: 0, fontSize: "16px" }}
                                >
                                  <ErrorMessage name="phone" />
                                </FormHelperText>
                              }
                            />
                          )}
                        />
                      </Box>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Box>
                        <Field
                          id="city"
                          name="city"
                          type="text"
                          as={TextField}
                          fullWidth
                          label="City"
                          helperText={
                            <FormHelperText
                              sx={{ color: "red", m: 0, fontSize: "16px" }}
                            >
                              <ErrorMessage name="city" />
                            </FormHelperText>
                          }
                        />
                      </Box>
                    </Grid>

                    <Grid item sm={6} xs={12}>
                      <Box>
                        <Field
                          id="address"
                          name="address"
                          type="text"
                          as={TextField}
                          fullWidth
                          label="Address"
                          helperText={
                            <FormHelperText
                              sx={{ color: "red", m: 0, fontSize: "16px" }}
                            >
                              <ErrorMessage name="address" />
                            </FormHelperText>
                          }
                        />
                      </Box>
                    </Grid>

                    <Grid item sm={6} xs={12}>
                      <Box>
                        <Field
                          id="postcode"
                          name="postcode"
                          type="number"
                          as={TextField}
                          fullWidth
                          label="Post Code"
                          helperText={
                            <FormHelperText
                              sx={{ color: "red", m: 0, fontSize: "16px" }}
                            >
                              <ErrorMessage name="postcode" />
                            </FormHelperText>
                          }
                        />
                      </Box>
                    </Grid>
                  </Grid>

                  <Box mt={1} mb={3} pl={2} pr={2}>
                    <CKEditor
                      editor={ClassicEditor}
                      className="ck-editor__editable"
                      // data={rowData?.detail || ""}
                      data={ckeditorContent}
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

                  <Box mb={3} pl={2} pr={2}>
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
                      Update
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
        <Grid container sm={10} xs={12} margin={"auto"} sx={{marginBottom:"25px"}}>
          <Card sx={{ width: "100%" }}>
            <h3>Reviews: </h3>
          </Card>
          {!isLoading &&
            reviewData?.map(
              (row) =>
                row.userid === rowData?.userid && (
                  <Card key={row?.id} sx={{ width: "100%" }}>
                    <Rating
                      name="text-feedback"
                      value={row?.rating}
                      readOnly
                      precision={0.5}
                      emptyIcon={
                        <StarIcon
                          style={{ opacity: 0.55 }}
                          fontSize="inherit"
                        />
                      }
                    />
                    <Typography variant="h5" component="div">
                      {row?.sender_name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "17px",
                        fontFamily:
                          "Proxima Nova,Open Sans,Helvetica Neue,Arial,sans-serif",
                      }}
                      dangerouslySetInnerHTML={{
                        __html: row?.detail
                          .replace(/\\n/g, "")
                          .replace(/\\/g, ""),
                      }}
                    />
                  </Card>
                )
            )}
        </Grid>

        <Alertdialog
          open={open}
          handleClose={handleClose}
          content="Your Profile data has been updated Successfully!"
        />
      </>
    );
  }
};

export default Dashboard;
