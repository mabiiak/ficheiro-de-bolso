import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

function Provider({ children }) {
    const [descritivo, setDescritivo] = useState({
        nome: "",
        classe: "",
        nivel: 0,
        raca: "",
        antecedente: "",
        alinhamento: "",
    });

    const [moedas, setMoedas] = useState({
        po: 0,
        pp: 0,
        pc: 0,
        pb: 0,
    });

    const [defineHabilidades, setHabilidades] = useState({
        forca: 0,
        destreza: 0,
        constituicao: 0,
        inteligencia: 0,
        sabedoria: 0,
        carisma: 0,
    });

    const [status, setStatus] = useState({
        hpAtual: 0,
        hpMax: 0,
        cd: 0,
        ca: 0,
        mod: 0,
    });

    const [listaPericias, setListaPericias] = useState({});

    const [listaMagias, setListaMagias] = useState([
        {
            nivel: 'truque',
            titulo: 'toque arrepiante',
            comentario: '1d8 necrotico',
        },
        {
            nivel: 'nivel 1',
            titulo: 'detectar magia',
            comentario: '10min de concentração',
        },
        {
            nivel: 'nivel 3',
            titulo: 'bola de fogo',
            comentario: '8d6 de dano',
        }
    ]);

    useEffect(() => {
        let verSalvos = JSON.parse(localStorage.getItem('personagem'));
        if (verSalvos) {
            setHabilidades(verSalvos.habilidades);
            setListaPericias(verSalvos.pericias);
            setDescritivo(verSalvos.descritivo);
            setStatus(verSalvos.status);
            setListaMagias(verSalvos.magias);
        };
    }, []);

    const estadosGlobais = {
        defineHabilidades,
        setHabilidades,
        listaPericias,
        setListaPericias,
        descritivo,
        setDescritivo,
        moedas,
        setMoedas,
        status,
        setStatus,
        listaMagias,
        setListaMagias,
    }

  return (
    <Context.Provider value={ estadosGlobais }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Provider;
