// Check if the browser supports WebGL
const isWebGLSupported = () => {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch (e) {
    return false;
  }
};

// Create a function to generate a WebGL fingerprint
const generateWebGLFingerprint = () => {
  if (isWebGLSupported()) {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    if (gl) {
      const fingerprint = {
        vendor: gl.getParameter(gl.VENDOR),
        renderer: gl.getParameter(gl.RENDERER),
        maxAnisotropy: gl.getExtension("EXT_texture_filter_anisotropic")
          ? gl.getParameter(
              gl.getExtension("EXT_texture_filter_anisotropic")
                .MAX_TEXTURE_MAX_ANISOTROPY_EXT
            )
          : "N/A",
      };

      return JSON.stringify(fingerprint);
    }
  }

  return "WebGL not supported";
};

// Call the function to generate the WebGL fingerprint
export const webGLFingerprint = generateWebGLFingerprint();
