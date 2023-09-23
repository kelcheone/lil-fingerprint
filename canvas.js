// Create a function to generate a canvas fingerprint
export const generateCanvasFingerprint = () => {
  // Create an HTML5 canvas element
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  // Set the canvas dimensions
  canvas.width = 200;
  canvas.height = 50;

  // Create some text to render on the canvas
  const text = "Canvas fingerprinting test";

  // Render the text on the canvas
  ctx.textBaseline = "top";
  ctx.font = "14px 'Arial'";
  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = "#f60";
  ctx.fillRect(125, 1, 62, 20);
  ctx.fillStyle = "#069";
  ctx.fillText(text, 2, 15);
  ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
  ctx.fillText(text, 4, 17);

  // Extract the canvas image as a data URL
  const canvasDataUrl = canvas.toDataURL();

  // Return the data URL, which can be used as a fingerprint
  return canvasDataUrl;
};
