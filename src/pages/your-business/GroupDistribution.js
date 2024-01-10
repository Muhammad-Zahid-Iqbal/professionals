import { Box, Grid, Typography } from "@mui/joy";
import React from "react";

const GroupDistribution = () => {
  return (
    <>
      <Grid container spacing={2} sx={{ margin: "auto", marginTop:"65px", marginBottom:"65px" }}>
        <Grid item sm={6} xs={12} sx={{textAlign:"center"}}>
          <Box >
            <img
            style={{width:"90%"}}
              alt="Business Image"
              src="https://library.uicore.co/wp-content/uploads/2020/11/business-feature-1.jpg"
            />
          </Box>
        </Grid>
        <Grid item sm={6} xs={12} margin={"auto"}>
          <Typography sx={{maxWidth: {sm:"64%", xs:"100%"}, fontSize:"30px", fontWeight:500, lineHeight:1.5, letterSpacing:"0.027em", textTransform:"none", pb:4}}> Understand the people who love your business</Typography>
          <Typography sx={{fontSize:'20px'}}>
            Understand the people who love your business Lorem ipsum dolor amet
            semiotics knausgaard shaman offal readymade distillery. Cronut
            coloring book slow-carb, live-edge irony iPhone DIY.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default GroupDistribution;
