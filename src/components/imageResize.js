const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = "../assests/PSC Photographs";
const outputDir = "../assests/resized";

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

const resizeImages = async () => {
    try {
      const files = fs.readdirSync(inputDir); // Read all files in the input directory
  
      for (const file of files) {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputDir, file);
  
        // Check if the file is an image
        if (/\.(jpg|jpeg|png|webp|gif)$/i.test(file)) {
          console.log(`Processing ${file}...`);
  
          await sharp(inputPath)
            .resize({
              width: 800, // Desired max width
              height: 500, // Desired max height
              fit: "inside", // Preserve aspect ratio, fit within box
              withoutEnlargement: true, // Prevent upscaling small images
            })
            .toFormat("jpeg") // Standardize format
            .toFile(outputPath);
  
          console.log(`${file} resized and saved to ${outputPath}`);
        } else {
          console.log(`${file} is not an image. Skipping...`);
        }
      }
  
      console.log("All images have been resized!");
    } catch (error) {
      console.error("Error resizing images:", error);
    }
  };

resizeImages();
