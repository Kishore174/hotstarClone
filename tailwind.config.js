// tailwind.config.js
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extends: {
      backgroundImage: {
        // "login-bg": "URL('.../src/assests/image/login-background.jpg')",
        // "home-bg": "URL('.../src/assests/image/home-background.jpg')"
      },
      colors: {
        "login-button": "#0063E4",
        "body-bg": "#0063E4",
        "viewer-hover": "#f9f9f91a",
        recommended: "rgba(249,249,0.6)",
      },
      transitionTimingFunction: {
        viewer:
          "0px 26 20px -10px rgba(0,0,0,0.69),0px,16px,10px,-10px rgba(0,0,0.73)",
        "viewer-hover":
          "0 40px 58px -16px rgba(0,0,0,0.8),0 30px 22px -10px rgba(0,0,0,0.72)",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("video-hover", "&:hover>video");
    },
    function ({ addVariant }) {
    
      addVariant("navitem-hover", "&:hover>span");
    },
  ],
};
