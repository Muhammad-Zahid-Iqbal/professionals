import React from "react";
import { Box, Button, FormControl, Grid, MenuItem, Select, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Toppng from "../../images/top.png";
import Bottompng from "../../images/bottom.png";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import Div from "../../shared/Div";

const validationSchema = Yup.object({
  search: Yup.string().required('Address to postcode'),
});

const Findclass = () => {
  const [selectedLocation, setSelectedLocation] = React.useState("tutors");
  const handleChangeSelect = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <>
      <Box sx={{ background: "#f2f2f2" }}>
        <Grid container sx={{ minHeight: "600px" }}>
          <Grid item sm={6} xs={12}>
            <Grid
              item
              sm={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                minHeight: "40vh",
                width: "100%",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: "36px",
                  fontSize: "40px",
                  fontWeight: 800,
                  marginLeft: "15%",
                  paddingTop: "20%",
                  maxWidth: "640px",
                  lineHeight: 1.4,
                  fontFamily:
                    "Buenos Aires, Pulp, OpenSans, 'Open Sans', sans-serif",
                }}
              >
                Find your Nearest Assessors and Tutors
              </Typography>
              <Typography
                sx={{
                  alignItem: "center",
                  fontSize: "20px",
                  fontWeight: 600,
                  paddingLeft: "15%",
                  paddingTop: "2%",
                }}
              >
                ✅ Check reviews, chat with our tutors, and book lessons all in
                one place 🎉
              </Typography>
            </Grid>
            <Formik
              initialValues={{
                type: selectedLocation,
                search: '',
              }}
              validationSchema={validationSchema}
              onSubmit={(data, { setSubmitting, resetForm }) => {
                // handleSubmit(data, { setSubmitting, resetForm });
              }}
            >
              {({ isSubmitting, setFieldValue }) => (
                <Form>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "10%",
                      width: "90%",
                      // border:"1px solid red",
                      marginLeft: "10%",
                      borderRadius: "30px",
                      overflow: "hidden",
                    }}
                  >
                    <FormControl fullWidth>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        inputProps={{MenuProps: {disableScrollLock: true}}}
                        name="type"
                        value={selectedLocation}
                        sx={{
                          color: "gray",
                          fontSize: "18px",
                          outline: "none",
                          border: "none",
                          background: "transparent",
                          width: "100%",
                          height: "78px",

                          background: "#fff",
                          padding: "10px", // Padding
                          backgroundImage: `url('https://c.superprof.com/style/images/home/v4/book-new-off.svg')`, // Replace with your image URL
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "10px center", // Adjust the position as needed
                          paddingLeft: "40px",
                          appearance: "none",
                          position: "relative",
                          boxShadow: "none",
                          ".MuiOutlinedInput-notchedOutline": { border: 0 },
                          "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                          {
                            border: 0,
                          },
                          "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                          {
                            border: 0,
                          },
                        }}
                        IconComponent={() => null}
                        onChange={(event) => {
                          handleChangeSelect(event);
                          setFieldValue("type", event.target.value); // Update the Formik field
                        }}
                        required
                      >
                        <MenuItem value="tutors">Tutors</MenuItem>
                        <MenuItem value="assessors">Assessors</MenuItem>
                      </Select>
                    </FormControl>
                    <div
                      style={{
                        borderLeft: "1px solid gray",
                        height: "40px",
                        background: "#fff"
                      }}
                    ></div>

                    <Field
                    as ={TextField}
                      fullWidth
                      id="search"
                      name="search"
                      type="search"
                      placeholder="Address to Postcode"
                      InputProps={{
                        startAdornment: (
                          <>
                            <img
                              src="https://icones.pro/wp-content/uploads/2021/02/icone-de-localisation-grise.png"
                              alt="Search Icon"
                              style={{
                                height: "34px",
                                width: "50px",
                                marginRight: "5px",
                                filter: "grayscale(100%)",
                              }}
                            />
                          </>
                        ),
                        
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          padding: "10px", // Padding
                          background: "#fff", // Background color
                          position: "relative",
                          width: "100%"
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                      }}
                    />
                    

                    <Button
                      type="submit"
                      sx={{
                        minWidth: "18%",
                        height: "75px",
                        background: "#ff7002",
                        color: "#fff",
                      }}
                      variant="contained"
                    >
                      Search
                    </Button>
                  </Box>
                  <Div style={{display:"flex", justifyContent:"center", paddingLeft:"30%", color:"red"}}>
                  <ErrorMessage name="search" component="div"  />

                  </Div>

                </Form>
              )}
            </Formik>
          </Grid>

          <Grid
            item
            sm={6}
            xs={12}
            sx={{
              margin: "auto",
              display: "flex",
              textAlign: "center",
              alignContent: "center",
            }}
          >
            <Box style={{ position: "relative", height: "95%" }}>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "100%",
                }}
              >
                <img
                  src={Toppng}
                  style={{
                    position: "absolute",
                    top: -30,
                    left: 0,
                    width: "25%",
                    animation: "scaleAnimation 3s infinite alternate",
                  }}
                  alt="Top Left Image"
                />
              </div>
              <Box sx={{ marginTop: "2%" }}>
                <img
                  src="https://img.freepik.com/free-photo/young-mother-working-from-home-with-daughter_329181-18974.jpg?w=740&t=st=1700745258~exp=1700745858~hmac=ad7c615a1015baf811a6840a0c97377abd9bb6b4f24140f8f22caba8a31809fa"
                  style={{ height: "80%", width: "80%" }}
                />
              </Box>

              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  height: "100%",
                  width: "100%",
                }}
              >
                <img
                  src={Bottompng}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    height: "20%",
                    width: "20%",
                    animation: "scaleAnimation 3s infinite alternate",
                  }}
                  alt="Bottom Right Image"
                />
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <style>
        {`
          @keyframes scaleAnimation {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(0.8);
            }
          }
        `}
      </style>
    </>
  );
};

export default Findclass;
