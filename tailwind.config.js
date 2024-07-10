/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    animation: {
      upDownCepet: "upDownCepet 400ms ease infinite alternate",
      upDown: "upDown 2700ms ease infinite alternate",
      upDown2: "upDown2 2100ms ease infinite alternate",
      upDown3: "upDown 3700ms ease infinite alternate",
      loading1: "loading1 9000ms ease infinite",
      loading2: "loading2 5000ms ease infinite",
      countdown: "countdown 3500ms ease 1 alternate",
      ameroloading: "ameroLoading 17500ms linear infinite alternate",
      lavaniloading: "lavaniLoading 17500ms linear infinite alternate",
      morraineloading: "morraineLoading 13500ms linear infinite alternate",
    },
    keyframes: {
      ameroLoading: {
        "0%": { transform: "translateX(0%)"},
        "100%": { transform: "translateX(-93%)"},
      },
      lavaniLoading: {
        "0%": { transform: "translateX(0%)"},
        "100%": { transform: "translateX(-93%)"},
      },
      morraineLoading: {
        "0%": { transform: "translateX(0%)"},
        "100%": { transform: "translateX(-89%)"},
      },
      upDown: {
        "0%": { transform: "translateY(5%)" },
        "100%": { transform: "translateY(-5%)" },
      },
      upDown2: {
        "0%": { transform: "translateY(-5%)" },
        "100%": { transform: "translateY(5%)" },
      },
      upDownCepet: {
        "0%": { transform: "translateY(10%)" },
        "100%": { transform: "translateY(-10%)" },
      },
      countdown: {
        "0%": { transform: "translateY(35%)"},
        "30%": { transform: "translateY(35%)"},
        "35%": { transform: "translateY(0%)"},
        "60%": { transform: "translateY(0%)"},
        "65%": { transform: "translateY(-35%)"},
        "90%": { transform: "translateY(-35%)"},
        "100%": { transform: "translateY(-35%)"},
      },
      loading1: {
        "0%": { transform: "translateY(0%)"},
        "30%": { transform: "translateY(0%)"},
        "35%": { transform: "translateY(-35%)"},
        "60%": { transform: "translateY(-35%)"},
        "65%": { transform: "translateY(-70%)"},
        "90%": { transform: "translateY(-70%)"},
        "100%": { transform: "translateY(0%)"},
      },
      loading2: {
        "0%": { transform: "translateY(0%)", opacity:0 },
        "30%": { transform: "translateY(0%)", opacity:0 },
        "33.333%": { transform: "translateY(-50%)", opacity:0 },
        "60%": { transform: "translateY(-100%)", opacity:0 },
        "66.666%": { transform: "translateY(0%)", opacity:1 },
        "100%": { transform: "translateY(0%)", opacity:1 },
      },
    },
  },
  plugins: [],
};
