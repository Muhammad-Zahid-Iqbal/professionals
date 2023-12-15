import PropTypes from "prop-types";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import header_trustpilot from "../../images/header_trustpilot.webp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link, useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

const Appbarlogin = (props) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLoginLogout = () => {
    const isLoggedIn = localStorage.getItem("token") !== null;

    if (isLoggedIn) {
      localStorage.removeItem("token");
    }

    navigate("/login");
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  if (!isMobile) {
    return (
      <Box sx={{ display: "flex", overflowX: "hidden" }}>
        <CssBaseline />{" "}
        <AppBar component="nav" sx={{ marginTop: 8.2 }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, mt: 2, display: { xs: "none", sm: "block" } }}
            >
              <img src={header_trustpilot} alt="logo" />
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button sx={{ color: "#fff", m: 2 }} to="/" component={Link}> Find A Clas </Button>
              <Button sx={{ color: "#fff", m: 2 }}>About</Button>
              <Button sx={{ color: "#fff", m: 2 }} to="/counselling" component={Link}> New </Button>
              <Button sx={{ color: "#fff", m: 2 }} to="/sign-up" component={Link}>Join US</Button>
              <Button sx={{ color: "#fff", m: 2 }}>Location</Button>
              <Button sx={{ m: 1, color: "#ee7925", backgroundColor: "#fff", "&:hover": { backgroundColor: "#ee7925", borderColor: "#ee7925", color: "#fff",},}} variant="outlined" startIcon={<LocationOnIcon />} > Find your nearest academy</Button>
            </Box>
            <Button sx={{ m: 1, color: "#ee7925", backgroundColor: "#fff", width:"80px", "&:hover": { backgroundColor: "#ee7925", borderColor: "#ee7925", color: "#fff",},}} variant="contained" onClick={handleLoginLogout}>
              {localStorage.getItem("token") !== null ? "Logout" : "Login"}
            </Button>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    );
  }
};

export default Appbarlogin;
