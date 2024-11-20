import React from "react";
import {
  Box,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Card,
  CardContent,
} from "@mui/material";
import logo from "../assests/Logo.jpeg"; // Replace with your actual path

const PricingPage = () => {
  const notes = [
    "Cricket bats, stumps, football, and bibs are complimentary.",
    "Badminton rackets and shoes are available for rent (₹50 each).",
    "Rescheduling is subject to availability.",
    "No refunds are applicable after booking.",
    "Energy drinks, cold drinks, and mineral water are available in the office.",
  ];

  return (
    <Box
      sx={{
        fontFamily: "Roboto, sans-serif",
        padding: 2,
        mt: { xs: "300px", sm: 16 },
      }}
    >
      {/* Header */}
      <Box sx={{ textAlign: "center", marginBottom: 2 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "#2d4583" }}
          className="heading-color"
        >
          Pricing
        </Typography>
      </Box>

      {/* Main Content */}
      <Grid container spacing={4}>
        {/* Cricket/Football Turf Table */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", textAlign: "center", marginBottom: 2 }}
            className="heading-color"
          >
            Cricket / Football Turf
          </Typography>
          <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
            <Table>
              <TableHead sx={{ backgroundColor: "#2d4583" }}>
                <TableRow>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Time
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Mon-Fri
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Sat-Sun
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>6 AM to 9 AM</TableCell>
                  <TableCell>₹699/-</TableCell>
                  <TableCell>₹899/-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>9 AM to 3 PM</TableCell>
                  <TableCell>₹399/-</TableCell>
                  <TableCell>₹599/-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3 PM to 7 PM</TableCell>
                  <TableCell>₹699/-</TableCell>
                  <TableCell>₹899/-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>7 PM to 12 PM</TableCell>
                  <TableCell>₹799/-</TableCell>
                  <TableCell>₹999/-</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        {/* Badminton Table */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", textAlign: "center", marginBottom: 2 }}
            className="heading-color"
          >
            Badminton Monthly Pass
          </Typography>
          <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
            <Table>
              <TableHead sx={{ backgroundColor: "#2d4583" }}>
                <TableRow>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Time
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Price
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow sx={{ fontWeight: 400 }}>
                  <TableCell>6 AM to 11 AM</TableCell>
                  <TableCell>₹250/- per hour</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>11 AM to 4 PM</TableCell>
                  <TableCell>₹200/- per hour</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>4 PM to 12 PM</TableCell>
                  <TableCell>₹250/- per hour</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>-</TableCell>
                  <TableCell>-</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Typography
            sx={{
              marginTop: 2,
              textAlign: "center",
              color: "#2d4583",
              fontWeight: "bold",
              //   background: "#f1c22e",
            }}
          >
            ₹5000/- for 30 hours!
          </Typography>
        </Grid>
      </Grid>
      {/* Discount Section */}
      <Box
        sx={{
          backgroundColor: "#2d4583",
          color: "white",
          padding: 3,
          borderRadius: "8px",
          textAlign: "center",
          marginTop: 6,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
          Discounts for Students!
        </Typography>
        <Typography>
          <strong>10%</strong> off for 20+ hours <br />
          <strong>15%</strong> off for 30+ hours <br />
          <strong>20%</strong> off for 40+ hours
        </Typography>
        <Typography sx={{ marginTop: 1 }}>
          (Valid only with College ID)
        </Typography>
      </Box>
      {/* Notes Section */}
      <Box sx={{ marginTop: 6 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", textAlign: "left", marginBottom: 2 }}
          className="text-color"
        >
          Notes:
        </Typography>
        <Grid container spacing={2}>
          {notes.map((note, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: "#f9f9f9",
                  border: "1px solid #ddd",
                  boxShadow: 2,
                  height: "100%",
                }}
              >
                <CardContent>
                  <Typography
                    variant="body1"
                    textAlign="left"
                    sx={{
                      color: "#2d4583",
                      fontSize: "16px",
                      textIndent: "1.5px",
                    }}
                  >
                    {index + 1}. {note}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default PricingPage;
