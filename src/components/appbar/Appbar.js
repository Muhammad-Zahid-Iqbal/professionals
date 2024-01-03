import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
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
import LocationOnIcon from "@mui/icons-material/LocationOn";

// import logo from "../../images/logo.svg";
// import gitlab from "../../images/gitlab.png";
import yourlogo from "../../images/yourlogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

const drawerWidth = 240;

const Appbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const isMobile = useMediaQuery("(max-width: 480px)");
  const handleLoginLogout = () => {
    const isLoggedIn = localStorage.getItem("token") !== null;

    if (isLoggedIn) {
      localStorage.removeItem("token", null);
    }

    navigate("/login");
  };
  const handleButtonClick = () => {
    // Navigate to the appropriate page when the button is clicked
    navigate("/dash-board");
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, background: "#1b0d01" }}>
        <img
          src={yourlogo}
          alt="logo"
          style={{
            width: "20%",
            height: "70px",
            cursor: "pointer",
            width: "100px",
          }}
          // style={{ width: "100%", cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
      </Typography>
      <Divider />
      <List>
  <ListItem disablePadding component={Link} to="/">
    <ListItemButton sx={{ textAlign: "center", flexDirection: "column" }}>
      <Button sx={{color:"#ee7925"}}>Home</Button>
    </ListItemButton>
  </ListItem>

  {localStorage.getItem("token") && (
    <ListItem disablePadding>
      <ListItemButton sx={{ textAlign: "center", flexDirection: "column" }}>
        <Button sx={{color:"#ee7925"}} onClick={handleButtonClick}>Edit Information</Button>
      </ListItemButton>
    </ListItem>
  )}

  <ListItem disablePadding to="/login" component={Link}>
    <ListItemButton sx={{ textAlign: "center", flexDirection: "column" }}>
      <Button sx={{color:"#ee7925"}} onClick={handleLoginLogout}>
        {localStorage.getItem("token") !== null ? "Logout" : "Login"}
      </Button>
    </ListItemButton>
  </ListItem>
</List>

    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex", height: "70px" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: "#1b0d01" }}>
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
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <img
              src={yourlogo}
              alt="logo"
              style={{
                width: "20%",
                height: "70px",
                cursor: "pointer",
                width: "100px",
              }}
              onClick={() => navigate("/")}
            />
          </Typography>
          {!isMobile && (
          <Button sx={{ m: 1, color: "#ee7925", backgroundColor: "#fff", "&:hover": { backgroundColor: "#ee7925", borderColor: "#ee7925", color: "#fff",},}}
            variant="contained"
            onClick={()=>navigate("/")}
          >
           Home
          </Button>
)}
          {!isMobile && (
          <Button sx={{ m: 1, color: "#ee7925", backgroundColor: "#fff", "&:hover": { backgroundColor: "#ee7925", borderColor: "#ee7925", color: "#fff",},}}
            variant="contained"
            onClick={handleButtonClick}
            style={{ display: localStorage.getItem("token") ? "block" : "none" }}
          >
            Edit Information
          </Button>
)}
          <Box
            sx={{
              // display: { xs: "none", sm: "block" },
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
            }}
          >
            <Button
              sx={{
                m: 1,
                color: "#ee7925",
                backgroundColor: "#fff",
                "&:hover": {
                  backgroundColor: "#ee7925",
                  borderColor: "#ee7925",
                  color: "#fff",
                },
              }}
              variant="outlined"
              startIcon={
                <LocationOnIcon sx={{ marginRight: { sm: 0, xs: 2 } }} />
              }
              onClick={() => navigate("/counselling")}
            >
              {" "}
              Find your nearest tutors and assessors
            </Button>
          </Box>
          {!isMobile && (
        <Button
          sx={{
            m: 1,
            color: "#ee7925",
            backgroundColor: "#fff",
            width: "80px",
            "&:hover": {
              backgroundColor: "#ee7925",
              borderColor: "#ee7925",
              color: "#fff",
            },
          }}
          variant="contained"
          onClick={handleLoginLogout}
        >
          {localStorage.getItem("token") !== null ? "Logout" : "Login"}
        </Button>
      )}
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
      {/* <Box component="main" sx={{ p: 0 }}>
        <Toolbar />
      </Box> */}
    </Box>
  );
};

export default Appbar;
