/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./components/*.{html,js}", "./pages/*.{html,js}"],
  prefix: "tw-",
  theme: {
    extend: {
        colors: {
          "#7B7B7B": "#7B7B7B",
          "#1773EA": "#1773EA",
          "#e14a84": "#e14a84",
          "#0072b1": "#0072b1",
        },
    },
  },
  plugins: [
//     .menu-item-two-active {
//     padding-left: 1rem;
//     padding-right: 1rem;
// }
  ],
};
