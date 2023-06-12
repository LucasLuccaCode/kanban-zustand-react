import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../../styles/global"
import { dark } from "../../styles/theme/dark"

const theme = dark

const Root: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <h1>
        Kanban Zustand
      </h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default Root