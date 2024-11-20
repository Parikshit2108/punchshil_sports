import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Button,
  CssBaseline,
} from "@mui/material";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import SportsIcon from "@mui/icons-material/Sports";
import Cricket from "../assests/cardImages/Cricket.jpg";
import Yoga from "../assests/cardImages/yoga.jpg";
import Badminton from "../assests/cardImages/badminton.jpg";
import Netpractice from "../assests/cardImages/net.jpg";
import Football from "../assests/cardImages/football.jpg";
import Punchasheel from "../assests/cardImages/punchsheel.jpg";

const features = [
  {
    title: "Cricket Net Practice Training",
    description:
      "Sharpen your cricketing skills with our state-of-the-art net practice facilities under expert guidance.",
    image: Netpractice,
    icon: <SportsCricketIcon color="primary" />,
  },
  {
    title: "Cricket Turf",
    description:
      "Play on our professional-grade cricket turf, designed to offer a premium playing experience.",
    image: Cricket,
    icon: <SportsCricketIcon color="secondary" />,
  },
  {
    title: "Football Turf",
    description:
      "Enjoy football games on our high-quality turf designed for players of all levels.",
    image: Football,
    icon: <SportsSoccerIcon color="success" />,
  },
  {
    title: "Badminton",
    description:
      "Experience the thrill of badminton on our world-class courts with excellent lighting and flooring.",
    image: Badminton,
    icon: <SportsTennisIcon color="error" />,
  },
  {
    title: "Yoga Classes",
    description:
      "Join our rejuvenating yoga sessions designed for all age groups, focusing on mental and physical well-being.",
    image: Yoga,
    icon: <SportsIcon color="info" />,
  },
];

function SportsPage() {
  return (
    <Box>
      {/* Features Section */}
      <Container maxWidth="100%" id="features" sx={{ py: 4 }}>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "#f1c22e", mb: 4 }}
        >
          Sports
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={feature.image}
                  alt={feature.title}
                />
                <CardContent>
                  <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
                    {feature.icon}
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ ml: 1, color: "#2d4583" }}
                    >
                      {feature.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="#2d4583">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default SportsPage;
