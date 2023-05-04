import React from "react";

import Habilidades from "../components/Habilidades";
import Pericias from "../components/Pericias";

import Cabeçalho from "../components/Cabeçalho";
import TituloExpansivo from "../components/genericos/TituloExpansivo";
import Descritivo from "../components/Descritivo";
import Status from "../components/Status";

export default function Ficha() {
    const habilidadesPericias = () => (
        <div id="setaGrid">
            <Habilidades/>
            <Pericias />
        </div>
    );

    return(
        <div>
            <Cabeçalho titulo={"nelson"}/>
            <Descritivo />
            <Status />
            <TituloExpansivo
                titulo="Habilidades e Pericias"
                body={habilidadesPericias()}
            />

            {/* Magias */}

            {/* Itens */}
        </div>
    )
}
