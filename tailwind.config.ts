import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        drma: {
          terracotta: "#A65D47",
          olive: "#5F634F",
          sand: "#EAE3D2",
          charcoal: "#2C2C2C",
          cream: "#F9F7F2",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        interface: ["var(--font-interface)", "serif"],
        detail: ["var(--font-detail)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
