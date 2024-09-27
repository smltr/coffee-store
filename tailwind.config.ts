import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Roboto Mono", "monospace"],
        body: ["Carrois Gothic", "sans serif"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#424835",
          secondary: "#d6c070",
          accent: "#bbb9ae",
          neutral: "#c8c6b9",
          "base-100": "#424835",
          info: "#0072e2",
          success: "#00f28a",
          warning: "#ab4100",
          error: "#e90004",
        },
      },
    ],
  },
} satisfies Config;
