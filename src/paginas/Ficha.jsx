import React from "react";
import Habilidades from "../components/Habilidades";
import TituloExpansivo from "../components/genericos/TituloExpansivo";

export default function Ficha() {
    const habilidades = (<Habilidades />);

    return(
        <div>
            {/* Cabeçalho */}
            
            {/* Descrição personagem e moedas */}

            {/* Status */}

            <TituloExpansivo
                titulo="Habilidades e Proeficiencias"
                body={habilidades()}
            />

            {/* Magias */}

            {/* Itens */}
        </div>
    )
}
