import React from "react";
import { Box, Typography } from "@mui/material";
import CGI from "../assests/scroll image/CGI.png";
import asianPaint from "../assests/scroll image/asian pain.jpg";
import IITPUNE from "../assests/scroll image/IIITPUNE.png";
import inflooens from "../assests/scroll image/inflooens.png";
import KSB from "../assests/scroll image/ksb.png";
import SITPUNE from "../assests/scroll image/SITPUNE.jpg";
import rajdeepAuto from "../assests/scroll image/rajdeepauto.png";

const LogoScroller = ({ title = "Our Partners" }) => {
  const logos = [
    CGI,
    IITPUNE,
    inflooens,
    KSB,
    SITPUNE,
    asianPaint,
    rajdeepAuto,
  ];

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
        mt: 4,
        py: 2,
      }}
    >
      {/* Title for the scroller */}
      {title && (
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            mb: 2,
            fontWeight: "bold",
          }}
          className="heading-color"
        >
          {title}
        </Typography>
      )}

      {/* Scrolling container */}
      <Box
        sx={{
          display: "flex",
          gap: 2, // Space between logos
          animation: "scroll 30s linear infinite",
          whiteSpace: "nowrap",
        }}
      >
        {/* Render logos twice for seamless scrolling */}
        {logos.concat(logos).map((logo, index) => (
          <Box
            key={index}
            sx={{
              display: "inline-block",
              width: "120px", // Logo size
              height: "120px",
              backgroundImage: `url(${logo})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              flexShrink: 0,
            }}
          ></Box>
        ))}
      </Box>

      {/* Smooth scrolling animation */}
      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateX(0%);
            }
            to {
              transform: translateX(-25%);
            }
          }
          
          /* Hide horizontal scrollbar */
          ::-webkit-scrollbar {
            display: none;
          }
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        `}
      </style>
    </Box>
  );
};

export default LogoScroller;
