import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import Punchasheel from "../assests/cardImages/punchsheel.jpg";
const AboutUs = () => {
  return (
    <Container maxWidth="100%">
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(${Punchasheel})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          msFlexDirection: "row",
          color: "white",
          textAlign: "center",
          mt: 8,
          mb: 2,
          borderRadius: "20px",
        }}
      >
        <Typography variant="h3" fontWeight="bold" color="white" mt={12}>
          Welcome to the Ultimate Sports Club
        </Typography>
        <Typography variant="h5" sx={{ mt: 14 }}>
          Your destination for excellence in sports and fitness
        </Typography>
      </Box>
      <Box sx={{ borderRadius: 2 }} className="cards-border">
        <Typography variant="h3" align="center" color="#f1c22e">
          About Us
        </Typography>
        {/* Welcome Section */}
        <Box sx={{ py: 4 }}>
          <Typography variant="h6" paragraph textAlign="start" color="#2d4583">
            Welcome to{" "}
            <strong className="heading-color">Punchasheel Sports Club</strong>,
            the premier sports venue dedicated to providing a world-class
            experience for athletes, sports fans, and event organizers. Located
            in <strong className="heading-color">Pune</strong>, our
            state-of-the-art facility offers a variety of sporting spaces,
            training opportunities, and event hosting services, making us the
            go-to destination for both competitive and recreational sports.
          </Typography>
        </Box>
      </Box>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "space-between",
        }}
        gap={1}
      >
        {/* Title Section */}

        {/* Our Story Section */}
        <Grid
          item
          xs={12}
          sm={5.9}
          sx={{ p: 4, borderRadius: 2 }}
          className="cards-border"
        >
          <Typography variant="h4" gutterBottom className="heading-color">
            Our Story
          </Typography>
          <Typography paragraph textAlign="start" className="text-color">
            Established in <strong className="heading-color">2024</strong>,{" "}
            <strong className="heading-color">Punchasheel Sports Club</strong>{" "}
            was built with one goal in mind: to create a facility that promotes
            health, wellness, and community through sports. Over the years, we
            have become a cornerstone of the local sports scene, hosting
            everything from regional tournaments and professional games to
            community fitness programs and corporate events.
          </Typography>
          <Typography paragraph textAlign="start" className="text-color">
            We are proud to serve athletes of all ages and skill levels, from
            budding youth athletes to seasoned professionals. With a strong
            focus on accessibility, inclusivity, and safety,{" "}
            <strong className="heading-color">Punchasheel Sports Club</strong>{" "}
            is committed to providing a space where people can come together to
            compete, train, or simply enjoy the game.
          </Typography>
        </Grid>

        {/* Our Mission Section */}
        <Grid
          item
          xs={12}
          sm={5.9}
          sx={{ p: 4, borderRadius: 2 }}
          className="cards-border"
        >
          <Typography variant="h4" gutterBottom className="heading-color">
            Our Mission
          </Typography>
          <Typography paragraph textAlign="start" className="text-color">
            At{" "}
            <strong className="heading-color">Punchasheel Sports Club</strong>,
            our mission is to deliver top-tier sports facilities and exceptional
            service that enrich the local community and inspire the athletes of
            tomorrow. We strive to create a dynamic and inclusive environment
            where sportsmanship, teamwork, and personal growth thrive.
          </Typography>
          <Typography paragraph textAlign="start" className="text-color">
            We are dedicated to supporting local sports teams, schools, and
            organizations, while also hosting large-scale events that bring
            people together to celebrate the power of sports. Whether you're
            here to compete, train, or spectate, we aim to provide a memorable
            experience for every guest.
          </Typography>
        </Grid>

        {/* Our Facilities Section */}
        <Grid
          item
          xs={12}
          sm={5.9}
          sx={{ p: 4, borderRadius: 2 }}
          className="cards-border"
        >
          <Typography variant="h4" gutterBottom className="heading-color">
            Our Facilities
          </Typography>
          <Typography paragraph textAlign="start" className="text-color">
            <strong className="heading-color">Punchasheel Sports Club</strong>{" "}
            offers a wide range of facilities designed to accommodate a variety
            of sports and events, including:
          </Typography>

          {/* Facilities List */}
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              className="text-color d-flex-align-justify-center"
            >
              <SportsSoccerIcon fontSize="small" />{" "}
              <Typography variant="body1">Football Fields</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              className="text-color d-flex-align-justify-center"
            >
              <SportsBasketballIcon fontSize="small" />{" "}
              <Typography variant="body1">Basketball Courts</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              className="text-color text-color d-flex-align-justify-center"
            >
              <SportsCricketIcon fontSize="small" />
              <Typography variant="body1">Cricket Courts</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className="text-color">
              <Typography variant="body1">Indoor Arena</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className="text-color">
              <Typography variant="body1">
                State-of-the-Art Equipment for Rent
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className="text-color">
              <Typography variant="body1">
                Training and Fitness Spaces
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className="text-color">
              <Typography variant="body1">
                VIP Lounges & Spectator Areas
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className="text-color">
              <Typography variant="body1">
                Accessible and Family-Friendly Amenities
              </Typography>
            </Grid>
          </Grid>

          <Typography
            paragraph
            textAlign="start"
            sx={{ mt: 2 }}
            className="text-color"
          >
            We continually update and improve our venue to ensure that it
            remains a safe, cutting-edge space for all types of events and
            activities.
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={5.9}
          sx={{ p: 4, borderRadius: 2 }}
          className="cards-border"
        >
          <Typography variant="h4" gutterBottom className="heading-color">
            Why Choose Us?
          </Typography>
          <Typography paragraph textAlign="start" className="text-color">
            Experience: With over [X] years in the industry, we have a proven
            track record of successfully hosting sports events and providing
            top-tier facilities. Professional Staff: Our team is made up of
            experienced professionals dedicated to ensuring your event or
            training session runs smoothly. Flexibility: Whether you're hosting
            a major tournament or just looking to rent a court for a friendly
            game, we offer a variety of rental options to fit your needs.
            Community Focus: We believe in the power of sports to bring people
            together, which is why we’re committed to supporting local sports
            teams, schools, and community initiatives. We look forward to
            welcoming you to [Venue Name] and providing a space where athletes
            can excel, fans can cheer, and communities can come together to
            celebrate the joy of sport.
          </Typography>
        </Grid>

        {/* Our Vision Section */}
        <Grid
          item
          xs={12}
          sm={5.9}
          sx={{ p: 4, borderRadius: 2 }}
          className="cards-border"
        >
          <Typography variant="h4" gutterBottom className="heading-color">
            Our Vision
          </Typography>
          <Typography paragraph textAlign="start" className="text-color">
            To be recognized as the leading sports venue in{" "}
            <strong className="heading-color">Pune</strong>, where athletes,
            sports enthusiasts, and communities come to connect, grow, and
            achieve excellence. We envision a facility that not only hosts major
            sporting events but also serves as a hub for education, wellness,
            and youth development.
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={5.9}
          sx={{ p: 4, borderRadius: 2 }}
          className="cards-border"
        >
          <Typography variant="h4" gutterBottom className="heading-color">
            Contact Us{" "}
          </Typography>
          <Typography paragraph textAlign="start" className="text-color">
            Have questions or want to learn more about booking our venue? Visit
            our [Contact Us] page or reach out to us at{" "}
            <strong className="heading-color">
              <a
                href="mailto:panchasheelsportsclub@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link-styles"
              >
                panchasheelsportsclub@gmail.com
              </a>
            </strong>
            .
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
