import { Card, Grid } from "@mui/joy";
import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import Div from "../../shared/Div";
//
const SingleCard = ({ TestimonialData }) => {
  return (
    <>
      <Grid container sm={9} display={"flex"} justifyContent={"center"} margin={"auto"} paddingBottom={"65px"}>
        
        {TestimonialData.map((testimonial, index) => (
          
          <Grid item key={index} sm={4} xs={12} pb={4} pr={2} pl={2}>
            <Card>
              <Box sx={{ display: "flex" }}>
                <Avatar
                  alt={testimonial.name}
                  sx={{ width: 56, height: 56 }}
                  src={testimonial.image}
                />
                <Box sx={{ marginLeft: "25px", marginTop: "10px" }}>
                  <Typography sx={{ fontWeight: 600 }}>
                    {testimonial.name}{" "}
                  </Typography>
                  <Typography sx={{ fontSize: "14px", color: "#1884CA" }}>
                    {testimonial.role}{" "}
                  </Typography>
                </Box>
              </Box>
              <Div sx={{ paddingTop: "20px" }}>
                <Typography sx={{ color: "#748494" }}>
                  {testimonial.quote}
                </Typography>
              </Div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SingleCard;
