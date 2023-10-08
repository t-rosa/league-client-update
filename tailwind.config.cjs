/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "riot-red": "#eb0029",
        "riot-white": "#f0f5f1",
        "league-background": "#161e24",
      },
    },
  },
  plugins: [],
};
