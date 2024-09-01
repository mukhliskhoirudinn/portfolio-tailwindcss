/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/**/*.{html,js}",
      "./*.html", // Untuk semua file HTML di root directory
   ],
   darkMode: "class",
   theme: {
      container: {
         center: true,
         padding: "16px",
      },
      extend: {
         screens: {
            "2xl": "1320px",
         },
         colors: {
            primary: "#0ea5e9",
            secondary: "#64748b",
            dark: "#0f172a",
         },
      },
   },
   plugins: [],
};
