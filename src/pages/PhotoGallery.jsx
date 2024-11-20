import React, { useEffect, useState } from "react";
import ImageCarousel from "../components/ImageCarousel";
import images from "../components/dynamicImgImport.js";
import { Box, Typography } from "@mui/material";

function PhotoGallery() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (images.length > 0) {
      setLoaded(true);
    }
  }, [images]);
  return (
    <Box>
      <Typography variant="h4" sx={{ textAlign: "center", mb: 1 }}>
        Gallery
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {loaded ? (
          <ImageCarousel images={images} />
        ) : (
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            Loading images...
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default PhotoGallery;
