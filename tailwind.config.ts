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
                primary: "#2563EB", // Electric Blue
                secondary: "#7C3AED", // Neon Purple
                background: "#0F172A", // Deep Navy
                surface: "#1E293B", // Glass Panels
                textPrimary: "#F8FAFC",
                textSecondary: "#94A3B8",
                success: "#16A34A",
                warning: "#F59E0B",
                border: "#334155",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"], // Added for data/code
                hindi: ["Noto Sans Devanagari", "sans-serif"],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'glass-gradient': 'linear-gradient(145deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.6) 100%)',
            },
            animation: {
                "float-slow": "float 8s ease-in-out infinite",
                "float-medium": "float 5s ease-in-out infinite",
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "shine": "shine 2s linear infinite",
                "tilt": "tilt 10s infinite linear",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                shine: {
                    "0%": { backgroundPosition: "200% center" },
                    "100%": { backgroundPosition: "-200% center" },
                },
                tilt: {
                    "0%, 50%, 100%": { transform: "rotate(0deg)" },
                    "25%": { transform: "rotate(0.5deg)" },
                    "75%": { transform: "rotate(-0.5deg)" },
                },
            },
            boxShadow: {
                'neon': '0 0 5px theme("colors.primary"), 0 0 20px theme("colors.primary")',
                'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            },
        },
    },
    plugins: [],
};

export default config;
