import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-playfair)"],
        sans: ["var(--font-inter)"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Modern Warm Palette
        "warm-cream": "#faf7f2",
        "warm-beige": "#f5f0e8",
        "warm-gray": "#e8e2d9",
        terracotta: "#d4704a",
        "warm-orange": "#e67e22",
        peach: "#f39c6b",
        coral: "#ff6b6b",
        coffee: "#8b4513",
        chocolate: "#6f4e37",
        "warm-brown": "#a0522d",
        caramel: "#c8956d",
        "forest-green": "#2d5a27",
        "sage-green": "#87a96b",
        olive: "#6b8e23",
        emerald: "#50c878",
        charcoal: "#2c2c2c",
        "soft-black": "#1a1a1a",
        "warm-white": "#fffef9",
        "light-gray": "#f8f6f3",
        amber: "#ffc107",
        mint: "#98d8c8",
        blush: "#ffb3ba",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
      },
      backgroundImage: {
        "warm-gradient": "linear-gradient(135deg, #faf7f2 0%, #f5f0e8 50%, #e8e2d9 100%)",
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(248, 246, 243, 0.2) 100%)",
        "green-gradient": "linear-gradient(135deg, #2d5a27 0%, #50c878 100%)",
        "warm-gradient-accent": "linear-gradient(135deg, #d4704a 0%, #e67e22 100%)",
        "earth-gradient": "linear-gradient(135deg, #c8956d 0%, #a0522d 100%)",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(44, 44, 44, 0.08)",
        "neu-light": "12px 12px 24px rgba(44, 44, 44, 0.08), -12px -12px 24px rgba(255, 255, 255, 0.9)",
        "neu-inset": "inset 6px 6px 12px rgba(44, 44, 44, 0.08), inset -6px -6px 12px rgba(255, 255, 255, 0.9)",
        soft: "0 4px 20px rgba(44, 44, 44, 0.08)",
        medium: "0 8px 30px rgba(44, 44, 44, 0.12)",
        strong: "0 12px 40px rgba(44, 44, 44, 0.15)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
