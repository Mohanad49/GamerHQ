import { Analytics } from "@vercel/analytics/react";
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import App from './App'
import theme from './theme'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme = { theme }>

    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <Analytics/>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)
