import React, { useState } from 'react'
import './css/Header.css'
import iconeGaleria from '../assets/gallery.svg'

export default function Cabeçalho({ titulo }) {
  const [viewHidden, setViewHidden] = useState(true)

  const openContent = () => {
    setViewHidden(!viewHidden)
  }

  return (
    <header className="gallery">
      <div className="gallery-header">
        <h1>{titulo}</h1>
        <button className="gallery-button" onClick={openContent}>
          <img src={iconeGaleria} alt="icone de Galeria" />
        </button>
      </div>
      <div className="modal" hidden={viewHidden}>
        <nav className="menu-modal">
          <a href="#">Galeria</a>
          <a href="#">Criar personagem</a>
          <a href="#">Logoff</a>
        </nav>
      </div>
    </header>
  )
}
