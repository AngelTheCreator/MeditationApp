/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}", // Add other folders if needed
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // Add custom theme settings here
    },
  },
  plugins: [
    // Add Tailwind plugins here
  ],
};
