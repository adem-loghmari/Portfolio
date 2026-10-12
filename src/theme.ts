import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeBackground {
    alt: string;
    footer: string;
  }
}

const theme = createTheme({
  cssVariables: { colorSchemeSelector: "class" },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: "#1565c0", light: "#1e88e5", dark: "#0d47a1" },
        secondary: { main: "#0288d1" },
        background: {
          default: "#ffffff",
          paper: "#ffffff",
          alt: "#f2f7fd",
          footer: "#0d47a1",
        },
        text: { primary: "#0b1f3a", secondary: "#4a5d75" },
        divider: "#dbe6f3",
      },
    },
    dark: {
      palette: {
        primary: { main: "#64b5f6", light: "#90caf9", dark: "#1e88e5" },
        secondary: { main: "#4fc3f7" },
        background: {
          default: "#0a1929",
          paper: "#0f2238",
          alt: "#0c1e33",
          footer: "#06111d",
        },
        text: { primary: "#f2f7fd", secondary: "#a9bcd3" },
        divider: "#1e3654",
      },
    },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: "'Inter', system-ui, sans-serif",
    h1: { fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 },
    h2: { fontWeight: 700, letterSpacing: "-0.01em" },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: "smooth", scrollPaddingTop: 64 },
        "@media (prefers-reduced-motion: reduce)": {
          html: { scrollBehavior: "auto" },
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { borderRadius: 999 } },
    },
    MuiCard: {
      defaultProps: { variant: "outlined" },
    },
    MuiChip: {
      styleOverrides: { root: { fontWeight: 500 } },
    },
  },
});

export default theme;
