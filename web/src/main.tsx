import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Header from './components/Header/index.tsx'
import Favoritos from './rotas/Favoritos.tsx'
import Home from './rotas/Home.tsx'

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

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
)
