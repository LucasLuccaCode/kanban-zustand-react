import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;

  color: rgba(255, 255, 255, 0.87);

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

* {
  padding: 0;
  margin: 0;
  outline: 0;
  box-sizing: border-box;
}

body,
html,
#root {
  width: 100vw;
  height: 100vh;
  font-size: 18px;
  background-color: ${props => props.theme.colors.bg.primary};
}
`
