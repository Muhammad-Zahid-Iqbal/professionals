import React, { useState } from "react";
import { TextField, Link, Typography, Container, CssBaseline, Grid, Box, FormHelperText, Paper, Alert,} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Div from "../../shared/Div";
import logo from "../../images/darklogo.svg";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { postRequest } from "../../backendservices/ApiCalls";
import { LoadingButton } from "@mui/lab";
import { useMyContext } from "../../components/context-user-data/ContextUserData";

const validationSchema = yup.object({
  email: yup
    .string("Enter email")
    .email("Invalid email")
    .required("Email is required"),
  password: yup.string("Enter password").required("Password is required"),
});

const Login = () => {
  const { setLoginUserData, refreshUserData } = useMyContext();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (data, resetForm) => {
    let params = {
      email: data.email,
      password: data.password,
    };
    postRequest(
      "/login",
      params,
      (response) => {
        console.log("login",response)
        localStorage.setItem("token", response?.data?.token);
        if (response?.data?.status === "success") {
          console.log("data added successfully");
          resetForm();
          setIsSubmitted(true);
          setLoginUserData(response?.data?.user);
          refreshUserData();

          setTimeout(() => {
            setIsSubmitted(false);
            navigate("/dash-board", {
              state: {
                useremail: data.email,
              },
            });
          }, 1000);
        } else {
          console.log("response not getting");
        }
      },
      (error) => {
        console.log(error?.response?.data);
      }
    );
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <img src={logo} alt="logo header" style={{ width: "15%" }} />
      </Box>
      <Grid container 
        // component="main"
        sx={{
          // height: "95vh",
          padding:"25px 0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // minWidth:"50vw"
        }}
      >
        <CssBaseline />
        <Paper
          elevation={3}
          // sx={{ padding: "10px", height: "80%", minWidth: "20vw" }}
        >
          {isSubmitted && (
            <Alert severity="success">You have been Login successfully!</Alert>
          )}
          <Div>
            <Typography component="h1" variant="h5" sx={{ p: 3 }}>
              LOGIN
            </Typography>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(data, { setSubmitting, resetForm }) => {
                handleSubmit(data, setSubmitting, resetForm);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Box sx={{ mt: 1, mb: 3, pl: 2, pr: 2 }}>
                    <Field
                      id="email"
                      name="email"
                      type="text"
                      as={TextField}
                      fullWidth
                      label="Enter Email"
                      helperText={
                        <FormHelperText
                          sx={{ color: "red", m: 0, fontSize: "16px" }}
                        >
                          <ErrorMessage name="email" />
                        </FormHelperText>
                      }
                    />
                  </Box>

                  <Box sx={{ mt: 1, mb: 3, pl: 2, pr: 2 }}>
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      as={TextField}
                      fullWidth
                      label="Enter Password"
                      helperText={
                        <FormHelperText
                          sx={{ color: "red", m: 0, fontSize: "16px" }}
                        >
                          <ErrorMessage name="password" />
                        </FormHelperText>
                      }
                    />
                  </Box>
                  
                  <Box sx={{ mb: 3, pl: 2, pr: 2 }}>
                    <LoadingButton
                      type="submit"
                      loading={isSubmitting}
                      fullWidth
                      variant="contained"
                      sx={{
                        background: "#FFA500",
                        height: "45px",
                        borderRadius: "15px",
                      }}
                    >
                      Login to your account
                    </LoadingButton>
                  </Box>
                </Form>
              )}
            </Formik>

            <Grid container>
              <Grid item sm={6} marginLeft={3} xs>
                <Link
                  href="#"
                  sx={{
                    color: "grey",
                    fontSize: "16px",
                    textDecoration: "underline",
                  }}
                >
                  Forgot your password?
                </Link>
              </Grid>
              <Grid item p={3}>
                {" "}
                DON'T HAVE AN ACCOUNT?
                <Link to="/sign-up" component={RouterLink} variant="body2">
                  SIGN UP HERE
                </Link>
              </Grid>
            </Grid>
          </Div>
        </Paper>
      </Grid>
    </>
  );
};

export default Login;
