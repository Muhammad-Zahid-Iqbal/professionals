// Layout.js
import React from "react";
import { Box, Grid } from "@mui/material";
import Appbar from "../components/appbar/Appbar";

const Layout = ({ children }) => {
  return (
    <Box>
      <Appbar/>
      <Box sx={{marginTop:"65px"}}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
