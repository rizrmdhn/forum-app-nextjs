/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: "#222831",
        light: "#EEEEEE",
        defaultLightHeaders: "#393E46",
        headerSearchBar: "rgba(0, 0, 0, 0.00)",
        defaultDarkHeaders: "#222831",
        threadCard: "rgba(0, 0, 0, 0.15)",
        threadCardDark: "rgba(255, 255, 255, 0.15)",
        categoryDark: "rgba(34, 40, 49, 0.95)",
        active: "#00C2FF",
        detailThreadBg: "rgba(238, 238, 238, 0.93)",
        detailBtnColor: "#323232",
      },
      width: {
        defaultHeaderMobile: "360px",
      },
      height: {
        defaultHeaderMobile: "80px",
        defaultMobileHeight: "640px",
        detailThreadHeight: "calc(100vh - 80px)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
});
