import React from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import App from './App.tsx'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif
  }

  li {
    list-style: none;
  }
`

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
)
