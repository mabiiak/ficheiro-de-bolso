import React, { useEffect, useState, useContext } from "react";
import { Context } from "../context/Provider";
import Habilidades from "../components/Habilidades";
import Proeficiencia from "../components/Proeficiencia";
import TituloExpansivo from "../components/genericos/TituloExpansivo";
import Cabeçalho from "../components/Cabeçalho";

export default function Ficha() {
    const {
        listProeficiencia, setListaProeficiencia,
        defineHabilidades, setHabilidades,
    } = useContext(Context);

    useEffect(() => {
        let verSalvos = JSON.parse(localStorage.getItem('personagem'));
        if (verSalvos) setHabilidades(verSalvos);
    }, []);

    const habilidadesProeficiencias = () => (
        <div id="setaGrid">
            <Habilidades
                defineHabilidades={defineHabilidades}
                setHabilidades={setHabilidades}
            />
            <Proeficiencia
                listProeficiencia={listProeficiencia}
                setListaProeficiencia={setListaProeficiencia}
            />
        </div>
    );

    return(
        <div>
            <Cabeçalho titulo={"nome personagem"}/>
            {/* Cabeçalho */}

            {/* Descrição personagem e moedas */}

            {/* Status */}

            <TituloExpansivo
                titulo="Habilidades e Proeficiencias"
                body={habilidadesProeficiencias()}
            />

            {/* Magias */}

            {/* Itens */}
        </div>
    )
}
