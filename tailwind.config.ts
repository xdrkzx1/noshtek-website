import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#E8EDF2",
          100: "#C5D0DC",
          200: "#9FAFC3",
          300: "#7A8EA9",
          400: "#5E7596",
          500: "#435C83",
          600: "#2D4570",
          700: "#1A2F5C",
          800: "#0D1E3F",
          900: "#0A1929",
          950: "#060F1A",
        },
        teal: {
          50: "#E0F7F7",
          100: "#B3ECEC",
          200: "#80DEDE",
          300: "#4DD0D0",
          400: "#26C4C4",
          500: "#00B8B8",
          600: "#009999",
          700: "#007A7A",
          800: "#005C5C",
          900: "#003D3D",
        },
        gray: {
          50: "#F8F9FA",
          100: "#F1F3F5",
          200: "#E9ECEF",
          300: "#DEE2E6",
          400: "#CED4DA",
          500: "#ADB5BD",
          600: "#868E96",
          700: "#495057",
          800: "#343A40",
          900: "#212529",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        "display-lg": ["3.75rem", { lineHeight: "1.1", fontWeight: "700" }],
        "display-md": ["3rem", { lineHeight: "1.15", fontWeight: "700" }],
        "display-sm": ["2.25rem", { lineHeight: "1.2", fontWeight: "700" }],
        "heading-xl": ["1.875rem", { lineHeight: "1.3", fontWeight: "600" }],
        "heading-lg": ["1.5rem", { lineHeight: "1.35", fontWeight: "600" }],
        "heading-md": ["1.25rem", { lineHeight: "1.4", fontWeight: "600" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "88": "22rem",
        "100": "25rem",
        "112": "28rem",
        "128": "32rem",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "counter": "counter 2s ease-out forwards",
        "pulse-teal": "pulseTeal 2s infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseTeal: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(0, 184, 184, 0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(0, 184, 184, 0)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern": "linear-gradient(135deg, #0A1929 0%, #0D2B4A 50%, #0A1929 100%)",
        "teal-gradient": "linear-gradient(135deg, #00B8B8, #007A7A)",
        "navy-gradient": "linear-gradient(180deg, #0A1929 0%, #0D1E3F 100%)",
        "card-shine": "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 50%)",
      },
      boxShadow: {
        "teal-glow": "0 0 30px rgba(0, 184, 184, 0.15)",
        "card": "0 4px 24px rgba(0, 0, 0, 0.08)",
        "card-hover": "0 12px 48px rgba(0, 0, 0, 0.15)",
        "nav": "0 2px 20px rgba(0, 0, 0, 0.08)",
        "dark-card": "0 4px 24px rgba(0, 0, 0, 0.3)",
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
