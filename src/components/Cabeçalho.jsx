import React, { useState, useContext } from "react";
import { Context } from "../context/Provider";
import './css/Header.css';
import iconeGaleria from '../assets/gallery.svg';

export default function Cabeçalho({titulo}) {
    const {
        listaPericias,
        defineHabilidades,
    } = useContext(Context);

    const [viewHidden, setViewHidden] = useState(true);

    const openContent = () => {
        setViewHidden(!viewHidden);
    }

    const salvaHabilidades = () => {
        localStorage.setItem('personagem', JSON.stringify({
            descritivo: {
                nome: "",
                classe: "",
                nivel: 0,
                raça: "",
                antecedente: "",
                alinhamento: "",
            },
            habilidades: { ...defineHabilidades},
            pericias: { ...listaPericias },
            moedas: {
                PO: 0,
                PP: 0,
                PC: 0,
                PB: 0
            },
            status: {
                hpAtual: 0,
                hpMax: 0,
                cd: 0,
                ca: 0,
                mod: 0,
            }
        }));
    };

    return(
        <header className="gallery">
            <div className="gallery-header">
                <h1>{titulo}</h1>
                {
                    titulo !== "galeria"
                        && <button onClick={salvaHabilidades}>SALVAR</button>
                }
                <button className="gallery-button" onClick={openContent}>
                    <img src={iconeGaleria} alt="icone de Galeria" />
                </button>
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
