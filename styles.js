import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    ${'' /* height: 100vh; */}
  }

  body {
    margin: 0;
    font-family: system-ui;
    display: flex;
    justify-content: center;
    gap:50px;
    flex-direction: column;
    background-color: #F9F8EB;
    position:relative;
    min-height: 100vh;

  }
`;
