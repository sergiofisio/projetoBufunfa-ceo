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
        "purple": "#5A189A",
        "purpleDark": "#240046",
        "purpleLight": "#9D4EDD",
        "gold": "#FF8500",
        "goldDark": "#FF6D00",
        "goldLight": "#FF9E00",
        "white": "#FFFFFF",
        "black": "#000000",
        "positive": "#348A5D",
        "negative": "#AD2C34",
        "whiteBg": "#E9E9EA"
      },
      fontSize: {
        "title": ["32px", {
          "fontWeight": "400",
          "lineHeight": "normal",
        }],
        "subTitle": ["24px", {
          "fontWeight": "400",
          "lineHeight": "normal",
        }],
        "subTitle2": ["18px", {
          "fontWeight": "400",
          "lineHeight": "normal",
        }],
        "textBody": ["16px", {
          "fontWeight": "400",
          "lineHeight": "24px",
        }],
        "textBodyBold": ["16px", {
          "fontWeight": "700",
          "lineHeight": "24px",
        }],
        "textBodyLink": ["16px", {
          "fontWeight": "400",
          "lineHeight": "normal"
        }],
        "textBody2": ["12px", {
          "fontWeight": "400",
          "lineHeight": "14.94px",
        }],
        "textBodyBold2": ["12px", {
          "fontWeight": "700",
          "lineHeight": "24px",
        }],
        "textBodyLink2": ["12px", {
          "fontWeight": "400",
          "lineHeight": "normal"
        }],

      }
    },
  },
  plugins: [],
};
