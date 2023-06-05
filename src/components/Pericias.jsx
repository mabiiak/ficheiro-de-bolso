import React, { useContext, useState } from 'react'
import { Context } from '../context/Provider'
import './css/Pericias.css'

function Pericias() {
  const { listaPericias, setListaPericias, editando, editarLista } =
    useContext(Context)

  const [nomePericias, setNomePericias] = useState('')
  const [modificador, setModificador] = useState('')

  const changeValue = ({ target }) => {
    const { value, name } = target

    if (name === 'nome') {
      setNomePericias(value)
    } else {
      setModificador(value)
    }
  }

  const salvaPericias = () => {
    setListaPericias([
      ...listaPericias,
      { nome: nomePericias, valor: +modificador },
    ])

    setNomePericias('')
    setModificador('')
  }

  return (
    <div id="pericia">
      {listaPericias &&
        listaPericias.map((pericia, index) => (
          <div key={index} className="linhas-pericia criar-pericia">
            <input
              id="nome-pericia"
              onChange={(e) =>
                editarLista(e, index, setListaPericias, listaPericias)
              }
              type="text"
              name="nome"
              placeholder="nome pericia"
              value={pericia.nome}
              disabled={!editando}
              key={`valor_${index}`}
            />
            <input
              id="mod-pericia"
              onChange={(e) =>
                editarLista(e, index, setListaPericias, listaPericias)
              }
              type="text"
              name="valor"
              placeholder="Pericia"
              value={pericia.valor}
              disabled={!editando}
            />
          </div>
        ))}
      <div className="criar-pericia">
        <input
          onChange={(e) => changeValue(e)}
          type="text"
          name="nome"
          placeholder="Pericia"
          value={nomePericias}
        />
        <input
          onChange={(e) => changeValue(e)}
          type="number"
          name="valor"
          placeholder="+4"
          value={modificador}
        />
        <button onClick={() => salvaPericias()}>+</button>
      </div>
    </div>
  )
}

export default Pericias
