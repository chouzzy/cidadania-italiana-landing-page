import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({

  fonts: {
    heading: 'Heebo, Poppins, Avenir',
    body: 'Heebo, Poppins, Avenir'
  },
  colors: {
    backgroundLight: "#EDF2F7",
    backgroundDark: "#96989a",
    brown: {
      300: '#d0a288',
      400: '#B09E8A',
      600: '#ac5c53'
    },
    beige: {
      100: '#c3a897',
      700: '#a09080'
    },
    teal: {
      300: '#7CC3BB',
      400: '#65bfbb',
      500: '#1C928B'
    },
    rose: {
      400:'#B39283',
      600:'#9E7E6F'
    },
    light:{
      400:'#EDF2F7',
      600:'#ebe4dd'
    },
    dark:{
      400:'#605D5D',
      800:'#343434'
    },
    facebook:'#3b5998',
    whatsapp:'#25d366',
    instagram:'#d62976',
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        color: 'gray.900',
        padding: 0,
        margin: 0,
        '-webkit-scrollbar-width': '10px', // Define a largura da barra de rolagem
        '-webkit-scrollbar-height': '10px', // Define a altura da barra de rolagem
        '-webkit-scrollbar-thumb-color': 'yellow', // Define a cor da alça da barra de rolagem
        '-webkit-scrollbar-track-color': 'gray',
      },
      // styles for the `a`
      a: {
        // color: 'teal.500',
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  },
})