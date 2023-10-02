import { createGlobalStyle } from "styled-components";
import background from "./background.jpg";

export const GlobalStyles = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  font-family: "Lato", sans-serif;
  background-image: url("${background}");
  background-size: cover;
  background-position: center;
}
`;

export const theme = {
  colors: {
    nightRider: "#333",
    black: "#000000",
    whiteSmoke: "#f5f5f5",
    white: "#ffffff",
    oxfordBlue: "#293b3b",
  },
};