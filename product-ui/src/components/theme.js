import { createTheme } from '@mui/material';

const theme = createTheme({
   palette: {
      primary: {
         main: '#483d8b'
      },
      secondary: {
         main: '#9c27b0'
      },
      error: {
         main: '#ef5350'
      }
   },
   typography: {
      fontFamily: 'monospace',
      button: {
         textTransform: 'capitalize',
         fontWeight:'900',
         fontSize:'16px'
      },
      body2:{
         fontWeight:'900',
         fontSize:'16px'
      }
   }
})

export default theme;