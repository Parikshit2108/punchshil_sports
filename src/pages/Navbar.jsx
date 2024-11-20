import React, { useState } from "react";
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
import { NAV_ITEMS } from "../constants/constant";
import Logo from "../assests/Logo-w-bg.png";
import AboutUs from "./AboutUS";
import Services from "./Services";
import FacilitiesPage from "./Facilities";
import ContactUsPage from "./ContactUs";
import Footer from "./FooterComponent";
import SportsPage from "./Sports";
import PricingPage from "./Pricing";
import PhotoGallery from "./PhotoGallery";
import LogoScroller from "../components/LogoScroller";

const drawerWidth = 240;

function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavClick = (item) => {
    const sectionId = item.toLowerCase().replace(/\s+/g, "");
    setMobileOpen(false);
    window.location.hash = `#${sectionId}`;
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        const offset = 80; // Adjust this to suit the space you need
        const topPosition =
          section.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: topPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h4" sx={{ my: 2, color: "#f1c22e" }}>
        Punchasheel Sports Club
      </Typography>
      <Divider />
      <List>
        {NAV_ITEMS.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => handleNavClick(item)}
            >
              <ListItemText primary={item} sx={{ color: "#2d4583" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "white", padding: 0.5 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { xs: "block", md: "none" },
              color: "#2d4583",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <img
                src={Logo}
                alt="Logo"
                height={60}
                width={120}
                style={{ borderRadius: "20px" }}
              />
              <Typography
                variant="body1"
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "block" },
                  color: "#f1c22e",
                }}
              >
                Punchasheel Sports Club
              </Typography>
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" }, fontWeight: 300 }}>
              {NAV_ITEMS.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: "#2d4583",
                    textTransform: "capitalize",
                    fontSize: "16px",
                  }}
                  onClick={() => handleNavClick(item)}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Toolbar />
        <Box id="aboutus">
          <AboutUs />
        </Box>
        <Box id="sports" width="100%">
          <SportsPage />
        </Box>
        <Box
          id="gallery"
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PhotoGallery />
        </Box>
        <Box id="pricing">
          <PricingPage />
        </Box>
        <div id="services">
          <Services />
        </div>
        <div id="facilities" width="100%">
          <FacilitiesPage />
        </div>
        <div id="contactus" width="100%">
          <ContactUsPage />
        </div>
        <Box width="100%">
          <LogoScroller />
        </Box>
        <Box id="footer" sx={{ width: "100%" }}>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
