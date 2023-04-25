import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

function Provider({ children }) {
    const [defineHabilidades, setHabilidades] = useState({
        forca: 0,
        destreza: 0,
        constituicao: 0,
        inteligencia: 0,
        sabedoria: 0,
        carisma: 0,
    });

    const [listaPericias, setListaPericias] = useState({});

    const estadosGlobais = {
        defineHabilidades,
        setHabilidades,
        listaPericias,
        setListaPericias,
    }

  return (
    <Context.Provider value={ estadosGlobais }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Provider;
