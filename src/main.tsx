import { StrictMode } from 'react'
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import MusicCard from './Componentes/MusicCard.tsx'

const post = createElement(
  MusicCard,
  {
    title: 'hello-tittle',
    src: 'urldelaimagen',
    autor: 'banda',
    año:1,
  },
);

console.log(post);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

