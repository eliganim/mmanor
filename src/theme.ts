import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Valera Round', sans-serif`,
    body: `'Valera Round', sans-serif`,
  },
  colors: {
    // color pallette: https://coolors.co/3d5a6c-f9eae1-714747-d1be9c-a06cd5
    lightBrown: '#F9EAE1',
    darkBrown: '#714747',
    mediumBrown: '#D1BE9C',
    sPurple: '#A06CD5',
    sBlue: '#3D5A6C',
    sLightBlue: '#9FC3D5',
    bgColor: '#F9F9F9',
  }
})

export default theme
