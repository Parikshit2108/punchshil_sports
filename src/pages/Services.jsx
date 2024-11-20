import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material";

const services = [
  {
    title: "Event Hosting",
    description:
      "We host a variety of events, including sports tournaments, corporate events, concerts, and private functions. Our versatile venue is designed to cater to all your event needs.",
  },
  {
    title: "Facility Rental",
    description:
      "Rent soccer fields, basketball courts, or meeting rooms at our venue. Flexible rental options tailored to suit your requirements.",
  },
  {
    title: "Training & Coaching",
    description:
      "Join our sports training programs, coaching sessions, or clinics to enhance your skills. Suitable for individuals and groups of all levels.",
  },
  {
    title: "Equipment Rental",
    description:
      "We offer a range of sports equipment, including nets, balls, and other gear, available for rent to support your activities.",
  },
];

const Services = () => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="space-between">
      <Typography variant="h4" align="center" gutterBottom>
        Our Services
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ mb: 5, color: "#2d4583" }}
      >
        Explore the wide range of services we provide at our venue.
      </Typography>
      <Grid container width="100%" spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card elevation={3} className="text-color">
              <CardContent>
                <Typography variant="h5" align="left" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body1" align="left" color="#2d4583">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
