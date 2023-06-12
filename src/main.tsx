import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'

import { GlobalStyle } from './styles/global.ts'
import { ThemeProvider } from 'styled-components'
import dark from './styles/theme/dark.ts'

const theme = dark

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
)
