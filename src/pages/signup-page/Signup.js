import React, { useState } from 'react';
import { TextField, Button, Link, Typography, Container, CssBaseline, Grid, Box, FormHelperText, Paper } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Div from '../../shared/Div';
import Alert from '@mui/material/Alert';
import { Link as RouterLink } from 'react-router-dom';
import { postRequest } from '../../backendservices/ApiCalls';
import Alertdialog from '../../components/AlertDiaolog/Alertdialog';

const validationSchema = yup.object({
    firstname: yup.string().required('First Name is required'),
    lastname: yup.string().required('Last Name is required'),
    email: yup.string('Enter email').email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z])/,
      'Password must contain at least one number, one symbol, and one letter'
    ),
      confirm_password: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});


const Signup = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [signupAlert, setSignUpAlert] = useState(false);
    const handleCloseSignUp = () => {
        setSignUpAlert(false);
    };
    const handleSubmit = (data, resetForm) => {
        let params = {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            password: data.password
        }
        console.log("params", params)
        postRequest(
            "/register",
            params,
            (response) => {
                if (response?.data?.status === "success") {
                    console.log("data added successfully");
                    resetForm();

                    setSignUpAlert(true);
                    console.log('Form reset');
                    setIsSubmitted(true);
                    setTimeout(() => {
                        setIsSubmitted(false);
                    }, 3000);
                } else {
                    console.log("response not getting")
                }

            },
            (error) => {
                console.log(error?.response?.data);
            }
        );
    };

    return (
        <>
            
            <Container component="main" sx={{ minHeight: "110vh", display: "flex", justifyContent: "center", alignItems: "center", mt: 2,marginBottom:"60px" }}>
                <CssBaseline />
                <Paper elevation={3} sx={{ padding: "10px", height: "95%", minWidth: "50%", }}>
                    <Div>
                        <Typography component="h1" variant="h5" sx={{ p: 3 }}>
                            SIGN UP
                        </Typography>
                        <Formik
                            initialValues={{
                                firstname: '',
                                lastname: '',
                                email: '',
                                password: '',
                                confirm_password:''
                            }}
                            validationSchema={validationSchema}
                            onSubmit={(data, { setSubmitting, resetForm }) => {
                                handleSubmit(data, resetForm);
                            }}
                        >
                            <Form>
                                <Box sx={{ mt: 1, mb: 3, pl: 2, pr: 2 }}>
                                    <Field
                                        id="firstname"
                                        name="firstname"
                                        type="text"
                                        as={TextField}
                                        fullWidth
                                        label="First Name"
                                        helperText={
                                            <FormHelperText sx={{ color: 'red', m: 0, fontSize: "16px" }}>
                                                <ErrorMessage name="firstname" />
                                            </FormHelperText>
                                        }
                                    />
                                </Box>
                                <Box sx={{ mt: 1, mb: 3, pl: 2, pr: 2 }}>
                                    <Field
                                        id="lastname"
                                        name="lastname"
                                        type="text"
                                        as={TextField}
                                        fullWidth
                                        label="Last name"
                                        helperText={
                                            <FormHelperText sx={{ color: 'red', m: 0, fontSize: "16px" }}>
                                                <ErrorMessage name="lastname" />
                                            </FormHelperText>
                                        }
                                    />
                                </Box>
                                <Box sx={{ mt: 1, mb: 3, pl: 2, pr: 2 }}>
                                    <Field
                                        id="email"
                                        name="email"
                                        type="email"
                                        as={TextField}
                                        fullWidth
                                        label="Enter Email"
                                        helperText={
                                            <FormHelperText sx={{ color: 'red', m: 0, fontSize: "16px" }}>
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
                                            <FormHelperText sx={{ color: 'red', m: 0, fontSize: "16px" }}>
                                                <ErrorMessage name="password" />
                                            </FormHelperText>
                                        }
                                    />
                                </Box>
                                 <Box  sx={{ mt: 1, mb: 3, pl: 2, pr: 2 }}>
                                    <Field
                                        id="confirm_password"
                                        name="confirm_password"
                                        type="password"
                                        as={TextField}
                                        fullWidth
                                        label="Confirm Password"
                                        helperText={
                                            <FormHelperText sx={{ color: 'red', m: 0, fontSize: "16px" }}>
                                                <ErrorMessage name="confirm_password" />
                                            </FormHelperText>
                                        }
                                    />
                                </Box>
                                <Box sx={{ mb: 3, pl: 2, pr: 2 }}>
                                    <Button type="submit" fullWidth variant="contained" sx={{ background: "#FFA500", height: "45px", borderRadius: "15px" }}>
                                        Signup
                                    </Button>
                                </Box>
                                {isSubmitted && <Alert severity="success">You have been register successfully!</Alert>}

                            </Form>
                        </Formik>
                        <Grid item p={3} > ALREADY HAVE AN ACCOUNT?
                            <Link to='/login' component={RouterLink} variant="body2">
                                LOGIN
                            </Link>
                        </Grid>
                    </Div>
                </Paper>
            </Container >
            <Alertdialog handleClose={handleCloseSignUp} open={signupAlert}  content="You have registered successfully!" disableScrollLock={true}/>
        </>


    );
};

export default Signup;
