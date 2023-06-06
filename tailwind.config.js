/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        "cover-full": "100% 100%",
      },
      colors: {
        blue: {
          primary: "#00235B",
        },
        red: {
          primary: "#E21818",
          secondary: "#B70000",
        },
        sky: {
          primary: "#98C8FF",
        },
        yellow: {
          primary: "#FFDD83",
        },
        gray: {
          primary: "#EDEDEDA1",
          secondary: "#323232",
          550: "#898989",
          650: "#545454",
        },
      },
      fontSize: {
        "xl-1": "22px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
