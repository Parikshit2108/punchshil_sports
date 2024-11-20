import React from "react";
import { Box, Typography, Grid, TextField, Button, Paper } from "@mui/material";

const ContactUsPage = () => {
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! We will get back to you soon.");
  };

  return (
    <Box sx={{ width: "100%", margin: "0 auto", mt: 5 }}>
      {/* Contact Information Section */}
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}
        className="heading-color"
      >
        Contact Us
      </Typography>
      <Grid container spacing={4}>
        {/* Contact Form */}

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", mb: 2 }}
              className="heading-color"
            >
              Contact Form
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                sx={{ mb: 2 }}
                required
              />
              <TextField
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
                sx={{ mb: 2 }}
                required
              />
              <TextField
                fullWidth
                label="Phone Number"
                type="tel"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Event Inquiry"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                sx={{ mb: 2 }}
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Get In Touch
              </Button>
            </form>
          </Paper>
        </Grid>
        <Grid item container xs={12} md={6}>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ padding: 3 }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", mb: 2 }}
                className="heading-color"
              >
                Contact Information
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }} className="text-color">
                <strong>Venue Address:</strong> Panchshil Sports Complex
                Bhintade Nagar, Janaki Nagar, Raghav Nagar, Ambegaon Budruk,
                Pune, Maharashtra 411046
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }} className="text-color">
                <strong>Phone:</strong> 7276666985, 9272101216
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }} className="text-color">
                <strong>Email:</strong> panchasheelsportsclub@gmail.com
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }} className="text-color">
                <strong>Follow Us:</strong>
                <Box sx={{ mt: 1 }} className="text-color">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginRight: 10 }}
                  >
                    Facebook
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginRight: 10 }}
                  >
                    Instagram
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </Box>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            {/* Map Section */}
            <Box sx={{ mt: 5, width: "100%" }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}
                className="heading-color"
              >
                Find Us Here
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  height: "400px",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <iframe
                  title="Venu Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.0744221709515!2d73.83544293401273!3d18.457048160802486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2955cc7deb925%3A0xa0e94d6c8e80013b!2sPanchshil%20Sports%20Complex!5e0!3m2!1sen!2sin!4v1732031654277!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUsPage;
