/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        purple: "#5A189A",
        purpleDark: "#240046",
        purpleLight: "#9D4EDD",
        gold: "#FF8500",
        goldDark: "#FF6D00",
        goldLight: "#FF9E00",
        white: "#FFFFFF",
        black: "#000000",
        positive: "#348A5D",
        negative: "#AD2C34",
        whiteBg: "#E9E9EA",
      },
      fontSize: {
        title: [
          "2rem",
          {
            fontWeight: "400",
            lineHeight: "normal",
          },
        ],
        subTitle: [
          "1.5rem",
          {
            fontWeight: "400",
            lineHeight: "normal",
          },
        ],
        subTitle2: [
          "1.125rem",
          {
            fontWeight: "400",
            lineHeight: "normal",
          },
        ],
        textBody: [
          "1rem",
          {
            fontWeight: "400",
            lineHeight: "24px",
          },
        ],
        textBodyBold: [
          "1rem",
          {
            fontWeight: "700",
            lineHeight: "24px",
          },
        ],
        textBodyLink: [
          "1rem",
          {
            fontWeight: "400",
            lineHeight: "normal",
          },
        ],
        textBody2: [
          "0.75rem",
          {
            fontWeight: "400",
            lineHeight: "14.94px",
          },
        ],
        textBodyBold2: [
          "0.75rem",
          {
            fontWeight: "700",
            lineHeight: "24px",
          },
        ],
        textBodyLink2: [
          "0.75rem",
          {
            fontWeight: "400",
            lineHeight: "normal",
          },
        ],
      },
    },
    styles: {
      "::-webkit-scrollbar": {
        width: "5px",
      },
      "::-webkit-scrollbar-track": {
        background: "#240046)",
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor: " #240046)",
      },
      scrollbarWidth: "thin",
      scrollbarColor: "#240046",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
