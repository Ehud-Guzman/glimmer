// scripts/generate-favicon.js
import sharp from "sharp";
import fs from "fs";

// Your SVG
const svgString = `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M32 12 L44 32 L32 52 L20 32 Z" fill="#2563EB"/>
  <circle cx="32" cy="32" r="12" fill="#1D4ED8"/>
  <circle cx="38" cy="26" r="4" fill="#60A5FA"/>
</svg>`;

async function generateFavicons() {
  const svgBuffer = Buffer.from(svgString);

  const sizes = [
    { size: 16, name: "favicon-16x16.png" },
    { size: 32, name: "favicon-32x32.png" },
    { size: 180, name: "apple-touch-icon.png" },
    { size: 192, name: "android-chrome-192x192.png" },
    { size: 512, name: "android-chrome-512x512.png" },
  ];

  for (const { size, name } of sizes) {
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(`public/${name}`);
    console.log(`Generated ${name}`);
  }

  // ICO for Windows
  await sharp(svgBuffer).resize(16, 16).toFile("public/favicon.ico");
  console.log("Generated favicon.ico");

  // Save SVG
  fs.writeFileSync("public/favicon.svg", svgString);
  console.log("Saved favicon.svg");
}

generateFavicons().catch(console.error);
