import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import {Grid,TextField,Button,Box, Typography, FormHelperText, IconButton, Avatar, Select, InputAdornment, MenuItem, InputLabel, FormControl,} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { authUserData, postRequest } from "../../backendservices/ApiCalls";
import { useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useMyContext } from "../../components/vertical-default/VerticalDefault";
import Editor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Alertdialog from "../../components/AlertDiaolog/Alertdialog";
import Div from "../../shared/Div";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  // email: Yup.string().email('Invalid email address').required('Email is required'),
  education: Yup.string().required("Education is required"),
  phone: Yup.string().required("Phone is required"),
  city: Yup.string().required("City is required"),
  // detail: Yup.string().required('Detail is required'),
});

const Dashboard = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [ckeditorContent, setCkeditorContent] = useState("");
  const [open, setOpen] = React.useState(false);
  const {loginUserData,setLoginUserData,getUserData,loading,refreshUserData,} = useMyContext();
  const rowData = loginUserData;
  console.log("rowData", rowData);
  const [selectedLocation, setSelectedLocation] = React.useState();
  // const [initialLoad, setInitialLoad] = useState(true);
  const location = useLocation();

  const useremail = location?.state?.useremail;
  console.log("useremail", useremail);
  useEffect(() => {
    refreshUserData();
  }, []);
  const handleChangeSelect = (event) => {
    setSelectedLocation(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64Data = reader.result;
        if (base64Data) {
          localStorage.setItem("selectedImage", base64Data);
          setSelectedImage(base64Data);
          console.log("Image loaded successfully!", base64Data);
        } else {
          console.log("Error loading image.");
        }
      };

      reader.readAsDataURL(file);
    }
  };
  useEffect(() => {
    const storedImage = localStorage.getItem("selectedImage");
    if (storedImage) {
      setSelectedImage(storedImage);
    }
  }, []);
  const handleCameraClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleSubmit = (data, setSubmitting, resetForm) => {
    let params = {
      image: selectedImage,
      education: data.education,
      user_type: data.type,
      email: useremail,
      mobile: data.phone,
      city: data.city,
      detail: ckeditorContent,
    };
    console.log("params", params);
    postRequest(
      "/updateuserdata",
      params,
      (response) => {
        console.log("dashbordRepo", response);
        if (response?.data?.status === "success") {
          console.log("data added successfully");
          setOpen(true);
          resetForm();
          // setIsSubmitted(true);
          // setTimeout(() => {
          //     setIsSubmitted(false);
          // }, 3000);
          getUserData();
          refreshUserData();
        } else {
          console.log("response not getting");
        }
      },
      (error) => {
        console.log(error?.response?.data);
      }
    );
  };
  const handleCkeditorChange = (event, editor) => {
    const data = editor.getData();
    setCkeditorContent(data);
  };
  // const ErrorText = styled('div')({
  //     color: 'red',
  //     fontSize: '16px',
  //     marginTop: '-10px', // Adjust this value as needed
  //   });
  if (loading && !rowData) {
    return <h1>Loading...</h1>;
  }
  if (!loading && rowData) {
    return (
      <>
        <Formik
          initialValues={{
            image: "",
            name: rowData?.firstname || "",
            email: useremail || "",
            education: rowData?.education || "",
            type: rowData?.user_type || "",
            phone: rowData?.mobile || "",
            city: rowData?.city || "",
            detail: rowData?.detail || "",
          }}
          validationSchema={validationSchema}
          onSubmit={(data, { setSubmitting, resetForm }) => {
            handleSubmit(data, { setSubmitting, resetForm });
          }}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form>
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
                      // border={1}
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
                          {/* You can customize the placeholder icon or text */}
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
                          // background: 'rgba(255, 255, 255, 0.8)',
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
                          // helperText={
                          //     <FormHelperText sx={{ color: 'red', m: 0, fontSize: "16px" }}>
                          //         <ErrorMessage name="name" />
                          //     </FormHelperText>
                          // }
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
                        {/* <ErrorText>
                                            <ErrorMessage name="email" />
                                        </ErrorText> */}
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
                          inputProps={{MenuProps: {disableScrollLock: true}}}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="type"
                            value={selectedLocation || rowData?.user_type}
                            label="Type"
                            onChange={(event) => {
                              handleChangeSelect(event);
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
                          type="number"
                          as={TextField}
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
                  </Grid>

                  <Box mt={1} mb={3} pl={2} pr={2}>
                    {/* <Field
                                        id="detail"
                                        name="detail"
                                        type="text"
                                        as={TextField}
                                        fullWidth
                                        multiline
                                        rows={4}
                                        label="Detail"
                                        helperText={
                                            <FormHelperText sx={{ color: 'red', m: 0, fontSize: "16px" }}>
                                                <ErrorMessage name="detail" />
                                            </FormHelperText>
                                        }
                                    /> */}
                    <CKEditor
                      editor={ClassicEditor}
                      className="ck-editor__editable"
                      data={rowData?.detail || "Detail start here"}
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

                  {/* Add similar code for other fields */}

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
                      Signup
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
        <Alertdialog open={open} handleClose={handleClose} />
      </>
    );
  }
};

export default Dashboard;
