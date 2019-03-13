import { css } from "styled-components";

const theme = {
  colors: {
    primary: "#009DFF",
    secondary: "#152134",
    primaryGray: "#f4f4f4",
    secondaryGray: "#b0b0b0",
    gradient: " linear-gradient(to bottom, #009dff 0%, #0063ff 100%)"
  },
  breakpoints: {
    phoneOnly: 599,
    tabletPortraitUp: 600,
    tabletLandscapeUp: 900,
    desktopUp: 1200,
    bigDesktopUp: 1800
  }
};

// Helper function to create media query
const createMediaQuery = (query, label, args) => css`
  @media (${query}: ${theme.breakpoints[label] / 16}em) {
    ${css(...args)}
  }
`;
// Iterate over breakpoints and create media queries
const media = Object.keys(theme.breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => {
    if (label === "phoneOnly") {
      return createMediaQuery("max-width", label, args);
    } else {
      return createMediaQuery("min-width", label, args);
    }
  };

  return acc;
}, {});

theme.media = media;

// export { media, theme as default };
export default theme;
