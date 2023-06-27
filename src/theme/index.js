import { ThemeProvider, createTheme } from "@mui/material";
import { MuiButton } from "./Button";

const Theme = ({ children }) => {
  const theme = createTheme({
    components: {
      MuiButton,
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
