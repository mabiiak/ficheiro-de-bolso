import React, { useEffect, useState, useContext } from "react";
import { Context } from "../context/Provider";

import Habilidades from "../components/Habilidades";
import Pericias from "../components/Pericias";

import Cabeçalho from "../components/Cabeçalho";
import TituloExpansivo from "../components/genericos/TituloExpansivo";
import Descritivo from "../components/Descritivo";

export default function Ficha() {
    const habilidadesPericias = () => (
        <div id="setaGrid">
            <Habilidades/>
            <Pericias />
        </div>
    );

    return(
        <div>
            <Cabeçalho titulo={"nome personagem"}/>

            {/* Descrição personagem e moedas */}
            <Descritivo />

            {/* Status */}

            <TituloExpansivo
                titulo="Habilidades e Pericias"
                body={habilidadesPericias()}
            />

            {/* Magias */}

            {/* Itens */}
        </div>
    )
}
