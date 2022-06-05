import { ThemeProvider, createTheme } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { typography } from "@mui/material/styles";
import { Suspense } from "react";
import "../src/i18n";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const theme = createTheme({
  typography: {
    questionTitle: {
      fontWeight: "bold",
      // fontSize: "1.5rem",
    },
  },
});

theme.typography.questionDescription = {
  ...theme.typography.body2,
};

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback="Loading...">
          <Story />
        </Suspense>
      </ThemeProvider>
    );
  },
];
