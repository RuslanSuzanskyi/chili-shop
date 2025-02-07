'use client';
import { createTheme } from "@mui/material";

const theme = createTheme({
  cssVariables: true,
  typography: {
    allVariants: {
      color: 'var(--black)',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-family-primary)',
    },
    h1: { fontSize: '2rem' },
    h2: { fontSize: '2rem' },
    h3: { fontSize: '2rem' },
    h4: { fontSize: '2rem' },
    h5: { fontSize: '2rem' },
    h6: { fontSize: '2rem' },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: 'var(--black)',
          textDecoration: 'none',
          '&hover': {
            color: 'var(--green)',
            backgroundColor: 'var(--white)'
          },
          '&active': {
            color: 'var(--green)',
            backgroundColor: 'var(--white)'
          },
          fontSize: 'var(--font-size-primary)',
          whiteSpace: 'nowrap',
          fontFamily: 'var(--font-family-primary)',
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          color: 'var(--black)',
          textDecoration: 'none',
          '&hover': {
            color: 'var(--green)',
            backgroundColor: 'var(--white)'
          },
          '&active': {
            color: 'var(--green)',
            backgroundColor: 'var(--white)'
          },
          fontSize: 'var(--font-size-primary)',
          whiteSpace: 'nowrap',
          fontFamily: 'var(--font-family-primary)',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          padding: 0,
          '@media (min-width:600px)': {
            paddingLeft: 0,
            paddingRight: 0,
          },
        },
      },
    },
  }
})

export default theme