import flowbitePlugin from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "cust-teal-50": "#F0FDFA",
        "cust-teal-500": "#14B8A6",
        "cust-gray-500": "#71717A",
        "cust-gray-700": "#3F3F46",
      }
    },
  },
  plugins: [flowbitePlugin],
};
