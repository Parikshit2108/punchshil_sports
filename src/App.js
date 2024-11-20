import { ThemeProvider } from "@emotion/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { createTheme } from "@mui/material";
import DrawerAppBar from "./pages/Navbar";
import AboutUs from "./pages/AboutUS";
import Services from "./pages/Services";
import FacilitiesPage from "./pages/Facilities";
import ContactUsPage from "./pages/ContactUs";
import Footer from "./pages/FooterComponent";
import "./App.css";

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      letterSpacing: "0.05em",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
      letterSpacing: "0.03em",
      color: "#f1c22e",
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 500,
      letterSpacing: "0.02em",
      color: "#f1c22e",

    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      letterSpacing: "0.01em",
      color: "#f1c22e",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 300,
      lineHeight: 1.6,
    },
  },
});

function App() {
  return (
    <div className="App">
      {/* Replacing Router with BrowserRouter */}
      <Router>
        <ThemeProvider theme={theme}>
          <DrawerAppBar />
          <Routes>
            {/* <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/contactus" element={<ContactUsPage />} />
            <Route path="/footer" element={<Footer />} /> */}
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
