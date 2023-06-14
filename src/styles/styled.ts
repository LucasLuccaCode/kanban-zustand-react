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

    opacity: {
      color: string,
      title: string,
      bg: string,
      boxShadow: string,
    },

    boxShadow: {
      card: string,
    },

    colors: {

      state: {
        planned: string,
        doing: string,
        done: string,
        all: string,
        delete: string,
      },

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
