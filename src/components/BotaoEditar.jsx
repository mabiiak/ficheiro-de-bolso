import React, { useContext } from "react";
import { Context } from "../context/Provider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import './css/BotaoEditar.css';

export default function BotaoEditar() {
    const {
        editando,
        setEditar,
        listaPericias,
        defineHabilidades,
        descritivo,
        moedas,
        status,
        listaMagias,
    } = useContext(Context);

    const salvaHabilidades = () => {
        localStorage.setItem('personagem', JSON.stringify({
            descritivo,
            moedas,
            habilidades: { ...defineHabilidades},
            pericias: { ...listaPericias },
            status,
            magias: listaMagias,
        }));
    };

    function habilitarEdicao(e) {
        if (e.target.name === "Salvar") {
            salvaHabilidades();
        };

        setEditar(!editando);
    };

    return(           
        <button
            id="btn-edicao"
            onClick={(e) => habilitarEdicao(e)}
            name={editando ? "Salvar" : "Editar"}
        >
            {
                editando
                    ? <FontAwesomeIcon icon={faFloppyDisk} size="2xl" style={{color: "#ededed"}} />
                    : <FontAwesomeIcon icon={faPenToSquare} size="2xl" style={{color: "#ededed"}} />
            }
        </button>
    )
}
