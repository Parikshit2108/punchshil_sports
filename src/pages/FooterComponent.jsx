import React from "react";
import { Box, Typography, Grid, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

export const NAV_ITEMS = [
  "About Us",
  "Sports",
  "Photo Gallery",
  "Event",
  "Pricing",
  "Services",
  "Facilities",
  "Contact Us",
];

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f4eae6",
        color: "#2d4583",
        mt: 2,
        py: 4,
        px: { xs: 2, md: 8 },
        width: "100%",
        borderRadius: "10px",
      }}
    >
      <Grid container spacing={3}>
        {/* Quick Links Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Quick Links
          </Typography>
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={index}
              href={`/${item.replace(/\s+/g, "").toLowerCase()}`}
              underline="none"
              color="inherit"
              sx={{
                display: "block",
                mb: 1,
                "&:hover": { color: "#f1c22e" },
              }}
            >
              {item}
            </Link>
          ))}
        </Grid>

        {/* Social Media Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Follow Us
          </Typography>
          <Box>
            <IconButton
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#2d4583", mr: 1, "&:hover": { color: "#3b5998" } }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#2d4583", mr: 1, "&:hover": { color: "#E4405F" } }}
            >
              <Instagram />
            </IconButton>
            <IconButton
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#2d4583", "&:hover": { color: "#1DA1F2" } }}
            >
              <Twitter />
            </IconButton>
          </Box>
        </Grid>

        {/* Additional Links Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            More Info
          </Typography>
          <Link
            href="/privacy-policy"
            underline="none"
            color="inherit"
            sx={{
              display: "block",
              mb: 1,
              "&:hover": { color: "#f1c22e" },
            }}
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-and-conditions"
            underline="none"
            color="inherit"
            sx={{
              display: "block",
              mb: 1,
              "&:hover": { color: "#f1c22e" },
            }}
          >
            Terms & Conditions
          </Link>
          <Typography
            variant="body2"
            sx={{ mt: 2, color: "#2d4583", fontSize: "0.9rem" }}
          >
            &copy; {new Date().getFullYear()} Punchasheel sports club. All
            rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
