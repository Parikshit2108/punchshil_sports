import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./facilites.css";

const facilitiesData = {
  features: [
    {
      title: "Sports Fields",
      description: "Two full-size soccer fields with natural grass.",
    },
    {
      title: "Courts",
      description: "Basketball and tennis courts with high-quality surfaces.",
    },
    {
      title: "Gymnasium",
      description: "A state-of-the-art fitness center with modern equipment.",
    },
    {
      title: "Locker Rooms",
      description: "Spacious locker rooms equipped with showers.",
    },
    {
      title: "Seating Areas",
      description: "Seating for up to 5,000 spectators.",
    },
    {
      title: "VIP Suites",
      description: "Luxurious suites for VIPs and private events.",
    },
    { title: "Parking", description: "Ample parking with accessible spaces." },
  ],
  images: [
    {
      src: "https://www.sennheiser.com/images/placeholder.raw.svg",
      alt: "Sports Field",
    },
    {
      src: "https://www.sennheiser.com/images/placeholder.raw.svg",
      alt: "Basketball Court",
    },
    {
      src: "https://www.theramblehotel.com/wp-content/uploads/2017/12/coming-soon.jpg",
      alt: "Gymnasium",
    },
    {
      src: "https://www.theramblehotel.com/wp-content/uploads/2017/12/coming-soon.jpg",
      alt: "Locker Room",
    },
    {
      src: "https://www.theramblehotel.com/wp-content/uploads/2017/12/coming-soon.jpg",
      alt: "Seating Area",
    },
    {
      src: "https://www.theramblehotel.com/wp-content/uploads/2017/12/coming-soon.jpg",
      alt: "VIP Suite",
    },
    {
      src: "https://www.theramblehotel.com/wp-content/uploads/2017/12/coming-soon.jpg",
      alt: "Parking Area",
    },
  ],
};

const FacilitiesPage = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <Box sx={{ width: "100%", margin: "0 auto", mt: 5 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}
        
      >
        Venue Features
      </Typography>
      <Grid container spacing={3}>
        {facilitiesData.features.map((feature, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }} className="text-color">
                {feature.title}
              </Typography>
              <Typography variant="body1" className="text-color">
                {feature.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      {/* <Box
        sx={{
          width: "100%",
          height: "300px",
          maxWidth: "800px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          //   justifyContent:"center",
          alignItems: "center",
          alignSelf: "center",
          mt: 5,
        }}
      >
        <Slider {...sliderSettings}>
          {facilitiesData.images.map((image, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "500px",
                height: { xs: "300px", sm: "400px", md: "500px" }, // Adjust height based on screen size
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  maxHeight: "300px", // Ensure image fills the container
                  height: "100%", // Ensure image fills the container
                  objectFit: "cover", // Ensure proper cropping
                  borderRadius: "10px",
                  transition: "transform 0.3s ease-in-out", // Smooth zoom effect on hover
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box> */}
    </Box>
  );
};

export default FacilitiesPage;
