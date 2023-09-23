import * as bsf from "./fingerprint.js";
import * as canvasFp from "./canvas.js";
import * as webglFp from "./webgl.js";

console.log("Generating fingerprint...");

const generateFingerprint = async () => {
  const fingerprint = {
    UserAgent: bsf.getUserAgent(),
    IpAddress: await bsf.getIpAddress(),
    ScreenResolution: bsf.getScreenResolution(),
    ColorDepth: bsf.getColorDepth(),
    AvailableScreenResolution: bsf.getAvailableScreenResolution(),
    PixelRatio: bsf.getPixelRatio(),
    TimezoneOffset: bsf.getTimezoneOffset(),
    SessionStorage: bsf.getSessionStorage(),
    LocalStorage: bsf.getLocalStorage(),
    IndexedDB: bsf.getIndexedDB(),
    CookiesEnabled: bsf.getCookiesEnabled(),
    TouchSupport: bsf.getTouchSupport(),
    DoNotTrack: bsf.getDoNotTrack(),
    HardwareConcurrency: bsf.getHardwareConcurrency(),
    Platform: bsf.getPlatform(),
    Plugins: bsf.getPlugins(),
    PdfViewerEnabled: bsf.getPdfViewerEnabled(),
    ForcedColors: bsf.getForcedColors(),
    canvasFingerprint: canvasFp.generateCanvasFingerprint(),
    webGLFingerprint: webglFp.webGLFingerprint,
  };
  console.log(canvasFp.generateCanvasFingerprint());
  const fingerprintHash = await hashFuntion(fingerprint);
  return {
    fingerprint,
    fingerprintHash,
  };
};

const hashFuntion = async (fingerprint) => {
  const hash = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(JSON.stringify(fingerprint))
  );
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
};

// get the generated fingerprint
const { fingerprint, fingerprintHash } = await generateFingerprint();

const hash_h1 = document.getElementById("fingerprint-hash");
hash_h1.textContent = `unique Id: ${fingerprintHash}`;

const populateTable = () => {
  const tableBody = document.getElementById("fingerprint-table");

  for (const prop in fingerprint) {
    const row = document.createElement("tr");
    const propertyName = document.createElement("td");
    const propertyValue = document.createElement("td");

    propertyName.textContent = prop;

    if (prop === "canvasFingerprint") {
      // Create an image element for the canvas fingerprint
      const canvasFingerprintImage = document.createElement("img");
      canvasFingerprintImage.src = fingerprint.canvasFingerprint;
      propertyValue.appendChild(canvasFingerprintImage);
    } else {
      // For other properties, display the value
      propertyValue.textContent = fingerprint[prop];
    }

    row.appendChild(propertyName);
    row.appendChild(propertyValue);

    tableBody.appendChild(row);
  }
};

// Call the function to populate the table
populateTable();
