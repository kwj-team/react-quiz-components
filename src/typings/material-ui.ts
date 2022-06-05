export {};

declare module "@mui/material/styles" {
  interface TypographyVariants {
    questionTitle: React.CSSProperties;
    questionDescription: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    questionTitle?: React.CSSProperties;
    questionDescription?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    questionTitle: true;
    questionDescription: true;
  }
}
