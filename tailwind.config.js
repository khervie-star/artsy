/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "artsy-black": "#333333",
        "desc-gray": "#616161",
      },
    },
    fontFamily: {
      artsy: ["'STIX Two Text', serif"],
      satoshi: ["'Satoshi', sans-serif"],
      bakersville: ["'Baskervville', serif"],
      rubik: ["'Rubik', sans-serif"],
    },
  },
  plugins: [],
};
