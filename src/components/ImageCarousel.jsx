import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./imagesCarousel.css";

const ImageCarousel = ({ images }) => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Enables navigation arrows
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 5,
        "@media (max-width: 900px)": {
          maxWidth: "600px",
          maxHeight: "300px !important", // Scale down the width for smaller screens
        },
        "@media (max-width: 600px)": {
          maxWidth: "300px",
          maxHeight: "200px !important", // Full width for very small screens
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "800px",
          height: "500px", // Matches image height
          position: "relative",
          "@media (max-width: 900px)": {
            maxWidth: "600px !important",
            maxHeight: "300px !important", // Scale down the width for smaller screens
          },
          "@media (max-width: 600px)": {
            maxWidth: "400pximportant",
            maxHeight: "200px !important", // Full width for very small screens
          },
        }}
      >
        <Slider {...settings}>
          {images.map((image, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "500px", // Matches parent height
                overflow: "hidden",
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain", // Ensures no cropping
                  margin: "auto",
                  display: "block",
                  visibility: "visible",
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default ImageCarousel;
