import React, { useEffect, useState } from "react";
import { TextField, Link, Typography, Container, CssBaseline, Grid, Box, FormHelperText, Paper, Alert,} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Div from "../../shared/Div";
import logo from "../../images/darklogo.svg";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { postRequest } from "../../backendservices/ApiCalls";
import { LoadingButton } from "@mui/lab";
import { useMyContext } from "../../components/context-user-data/ContextUserData";
import AlertDialog from "../../components/AlertDiaolog/Alertdialog";

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
  const [signupAlert, setSignUpAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userID, setUserID]= useState('')
  const navigate = useNavigate();
  const handleCloseSignUp = () => {
    setSignUpAlert(false);
};

  const handleSubmit = (data, resetForm, setSubmitting) => {
    let params = {
      email: data.email,
      password: data.password,
    };
    postRequest(
      "/login",
      params,
      (response) => {
        setIsLoading(true);

        console.log("login",response?.data?.user?.userid)
        setUserID(response?.data?.user?.userid);
        localStorage.setItem("token", response?.data?.token);
        if (response?.data?.status === "success") {
          console.log("data added successfully");
          setIsLoading(false);
          resetForm();
          setIsSubmitted(true);
          setSubmitting(true);
          setLoginUserData(response?.data?.user);
          refreshUserData();
         
          setTimeout(() => {
            setIsSubmitted(false);
            navigate("/dashboard", {
              state: {
                useremail: data.email,
                userID:userID,
                isLoadings:isLoading
              },
            });
          }, 2000);
        } else if (response?.data?.status === "error") {
          // alert(response?.data?.message || "Login failed"); // Display the error message received from the server
          // navigate("/login");
          setSignUpAlert(true);
          setIsSubmitted(false);
          setSubmitting(false);
          setIsLoading(false)

        }
      },
      (error) => {
        console.log(error?.response?.data);
        setIsSubmitted(false);
        setSubmitting(false);
        setIsLoading(false)

      }
    );
  };
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    }
  }, []);
  
  return (
    <>
      {/* <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <img src={logo} alt="logo header"  />
      </Box> */}
      <Grid container sm={4} margin={"auto"} textAlign={"center"}
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
          elevation={3} sx={{width:"98%"}}
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

            <Grid container sx={{display:"flex", flexDirection:"column"}}>
              {/* <Grid item>
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
              </Grid> */}
              <Grid item p={3}>
                {" "}
                Don't have an account?
                <Link to="/sign-up" component={RouterLink} variant="body2">
                  Sign up here
                </Link>
              </Grid>
            </Grid>
          </Div>
        </Paper>
      </Grid>
      <AlertDialog handleClose={handleCloseSignUp} open={signupAlert}  content="username or password is incorrect!" disableScrollLock={true}/>

    </>
  );
};

export default Login;
