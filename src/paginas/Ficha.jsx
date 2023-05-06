import React from "react";

import Habilidades from "../components/Habilidades";
import Pericias from "../components/Pericias";

import Cabeçalho from "../components/Cabeçalho";
import TituloExpansivo from "../components/genericos/TituloExpansivo";
import Descritivo from "../components/Descritivo";
import Status from "../components/Status";
import Magias from "../components/Magias";

export default function Ficha() {
    const habilidadesPericias = () => (
        <div id="setaGrid">
            <Habilidades/>
            <Pericias />
        </div>
    );

    const listaMagias = () => (
        <Magias />
    )

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
            <TituloExpansivo
                titulo="Magias"
                body={listaMagias()}
            />

            {/* Itens */}
            <TituloExpansivo
                titulo="Itens"
            />

            <TituloExpansivo
                titulo="Idiomas e Proeficiencias"
                // body={habilidadesPericias()}
            />
        </div>
    )
}
