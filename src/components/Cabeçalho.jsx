import React, { useState, useContext } from "react";
import { Context } from "../context/Provider";
import './css/Header.css';
import iconeGaleria from '../assets/gallery.svg';

export default function Cabeçalho({titulo}) {
    const {
        listProeficiencia, setListaProeficiencia,
        defineHabilidades, setHabilidades,
    } = useContext(Context);

    const [viewHidden, setViewHidden] = useState(true);

    const openContent = () => {
        setViewHidden(!viewHidden);
    }

    const salvaHabilidades = () => {
        localStorage.setItem('personagem', JSON.stringify({
            habilidades: { ...defineHabilidades},
            pericias: { }
        }));
    };

    return(
        <header className="gallery">
            <div className="gallery-header">
                <h1>{titulo}</h1>
                <button className="gallery-button" onClick={openContent}>
                    <img src={iconeGaleria} alt="icone de Galeria" />
                </button>
                {
                    titulo === "galeria"
                        && <button onClick={salvaHabilidades}>SALVAR</button>
                }
            </div>
            <div className="modal"  hidden={viewHidden}>
                <nav className="menu-modal">
                    <a href="#">Galeria</a>
                    <a href="#">Criar personagem</a>
                    <a href="#">Logoff</a>
                </nav>
            </div>
        </header>
    )
}
