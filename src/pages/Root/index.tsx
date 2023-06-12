import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../styles/global'
import { dark } from '../../styles/theme/dark'

import { RootStyled } from './styles'

import { Header } from './Header'
import { Main } from './Main'

const theme = dark

const Root: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <RootStyled>
        <Header />

        <Main />
      </RootStyled>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default Root