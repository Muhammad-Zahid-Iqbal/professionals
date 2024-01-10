import { Box, Grid } from "@mui/joy";
import { Typography, useTheme  } from "@mui/material";
import React from "react";
import fa from '../../images/fa.png'

const WorldBusiness = () => {
  return (
    <>
      <Grid
        container
        sx={{  marginTop: "5%", marginBottom: "65px" }}
      >
        <Grid item sm={6} xs={12} >
            <img style={{ marginLeft: window.innerWidth >= 600 ? '19%' : '0%',}}  src={fa} alt="fa"/>
          <Typography
            sx={{
              maxWidth: { sm: "60%", xs: "100%" },
              fontSize: "40px",
              fontWeight: 500,
              lineHeight: 1.5,
              letterSpacing: "0.027em",
              textTransform: "none",
              pb: 4,
              margin:"auto"
            }}
          >
            {" "}
            World-class assets for your business
          </Typography>
          <Typography sx={{ fontSize: "20px", margin:"auto",  maxWidth: { sm: "60%", xs: "100%" }, }}>
            Time is money. It leaves digging through your design asset folders
            behind and lets you access your icons without hassle.
          </Typography>
        </Grid>
        <Grid item sm={6} xs={12} sx={{ textAlign: "center" }}>
          <Box>
          <img
              style={{
                width: '100%',
                maxWidth: window.innerWidth >= 600 ? '64%' : '100%',
              }}
              alt="Business Image"
              src="https://brisk.uicore.co/saas/wp-content/uploads/sites/4/2019/11/saas-side-2.png"
            />

          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default WorldBusiness;
