import { css } from "@emotion/react";

export const globalStyles = css`
  :root {
    --white: #ffffff;
    --black: #000112;
    --purplePrimary: #635fc7;
    --purpleSecondary: #a8a4ff;
    --redPrimary: #ea5555;
    --redSecondary: #ff9898;
    --text: #000112;
    --line: #e4ebfa;
    --primaryBg: #ffffff;
    --secondaryBg: #f4f7fd;
  }

  [data-theme="dark"] {
    --text: #ffffff;
    --line: #3e3f4e;
    --primaryBg: #2b2c37;
    --secondaryBg: #20212c;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Plus Jakarta Sans", sans-serif;
  }
`;