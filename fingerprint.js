export const getUserAgent = () => {
  return navigator.userAgent;
};

export const getIpAddress = async () => {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    if (response.ok) {
      const data = await response.json();
      console.log(await data);
      return data.ip;
    }
    throw new Error("Failed to fetch IP address");
  } catch (err) {
    throw new Error("Failed to fetch IP address" + err.message);
  }
};

export const getScreenResolution = () => {
  return `${screen.width}x${screen.height}`;
};

export const getColorDepth = () => {
  return screen.colorDepth;
};

export const getAvailableScreenResolution = () => {
  return `${screen.availWidth}x${screen.availHeight}`;
};

export const getPixelRatio = () => {
  return window.devicePixelRatio;
};

export const getTimezoneOffset = () => {
  return new Date().getTimezoneOffset();
};

export const getSessionStorage = () => {
  try {
    return !!window.sessionStorage;
  } catch (e) {
    return true;
  }
};

export const getLocalStorage = () => {
  try {
    return !!window.localStorage;
  } catch (e) {
    return true;
  }
};

export const getIndexedDB = () => {
  try {
    return !!window.indexedDB;
  } catch (e) {
    return true;
  }
};

export const getCookiesEnabled = () => {
  return navigator.cookieEnabled;
};

export const getTouchSupport = () => {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
};

export const getLanguages = () => {
  return navigator.languages;
};

export const getDoNotTrack = () => {
  if (navigator.doNotTrack) {
    return navigator.doNotTrack;
  } else if (navigator.msDoNotTrack) {
    return navigator.msDoNotTrack;
  } else if (window.doNotTrack) {
    return window.doNotTrack;
  } else {
    return "unknown";
  }
};

export const getHardwareConcurrency = () => {
  return navigator.hardwareConcurrency;
};

export const getPlatform = () => {
  return navigator.platform;
};

export const getPlugins = () => {
  return Array.from(navigator.plugins).map((plugin) => plugin.name);
};

export const getPdfViewerEnabled = () => {
  return navigator.pdfViewerEnabled;
};

export const getForcedColors = () => {
  return window.matchMedia("(forced-colors)").matches;
};
