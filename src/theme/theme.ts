import { createTheme, ThemeOptions } from "@material-ui/core";
import { cloneDeep, merge } from "lodash";

const common = {
  spacing: [0, 4, 8, 16, 24, 32, 40, 48, 56, 64, 72],
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          boxShadow: "unset",
          backgroundColor: "transparent",
          color: "inherit",
        },
      },
    },
  },
} as ThemeOptions;

export const lightTheme = createTheme(
  merge(cloneDeep(common), {
    palette: {
      mode: "light",
      divider: "#F2F2F7",
      primary: {
        main: "#05C194",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: "#039BCB",
        dark: "#066988",
        contrastText: "#FFFFFF",
      },
      action: {
        selected: "#E9EEF1",
        hover: "#EEF3F5",
      },
      background: {
        default: "#F4F7F8",
      },
      text: {
        secondary: "#ABABAB",
      },
    },
    components: {
      MuiAppBar: {
        defaultProps: {
          elevation: 0,
        },
      },
    },
  })
);
