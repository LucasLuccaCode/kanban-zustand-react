import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    fontSize: {
      small: string
      medium: string
      large: string
      title: string
    }

    boxShadow: {
      card: string
    }

    colors: {
      bg: {
        primary: string
        secondary: string
        details: string
        button: string
        buttonHover: string
      }

      opaque: string

      border: string
      borderFocus: string

      text: {
        title: string
        details: string
        button: string
        placeholder: string
      }
    }

    spacing: {
      small: string
      medium: string
      large: string
      top: string
    }

    borderRadius: {
      small: string
      medium: string
      large: string
    }
  }
}
