import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  --planned-state-color: ${props => props.theme.colors.state.planned};
  --doing-state-color: ${props => props.theme.colors.state.doing};
  --done-state-color: ${props => props.theme.colors.state.done};
  --all-state-color: ${props => props.theme.colors.state.all};
  --delete-state-color: ${props => props.theme.colors.state.delete};

  --color-opacity: ${props => props.theme.opacity.color};
  --title-opacity: ${props => props.theme.opacity.title};
  --bg-opacity: ${props => props.theme.opacity.bg};
  --box-shadow-opacity: ${props => props.theme.opacity.boxShadow};
  
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
  font-family: 'Poppins', sans-serif;
}

body,
html,
#root {
  width: 100vw;
  height: 100vh;
  font-size: 18px;
  background-color: ${props => props.theme.colors.bg.primary};
}

button {
  cursor: pointer !important;
  all: unset;
  transition: all .3s ease;
}

button:active {
  transform: scale(.95)
}

li {
  list-style: none;
}
`
