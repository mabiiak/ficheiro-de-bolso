import React, { useEffect, useState } from "react";
import Habilidades from "../components/Habilidades";
import Proeficiencia from "../components/Proeficiencia";
import TituloExpansivo from "../components/genericos/TituloExpansivo";

export default function Ficha() {
    const [defineHabilidades, setHabilidades] = useState({
        forca: 0,
        destreza: 0,
        constituicao: 0,
        inteligencia: 0,
        sabedoria: 0,
        carisma: 0,
    });

    useEffect(() => {
        let verSalvos = JSON.parse(localStorage.getItem('personagem'));
        if (verSalvos) setHabilidades(verSalvos);
    }, []);

    const salvaHabilidades = () => {
        localStorage.setItem('personagem', JSON.stringify(defineHabilidades));
    };

    const habilidadesProeficiencias = () => (
        <div id="setaGrid">
            <Habilidades
                defineHabilidades={defineHabilidades}
                setHabilidades={setHabilidades}
            />
            <Proeficiencia />
        </div>
    );

    return(
        <div>
            {/* Cabeçalho */}

            {/* Descrição personagem e moedas */}

            {/* Status */}

            <TituloExpansivo
                titulo="Habilidades e Proeficiencias"
                body={habilidadesProeficiencias()}
            />

            {/* Magias */}

            {/* Itens */}
            <button onClick={salvaHabilidades}>SALVAR</button>
        </div>
    )
}
