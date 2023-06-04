import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../context/Provider'
import './css/Pericias.css'

function Pericias() {
  const { listaPericias, setListaPericias, editando } = useContext(Context)

  const [nomePericias, setNomePericias] = useState('')
  const [modificador, setModificador] = useState('')
  const [lista, setLista] = useState([])

  useEffect(() => {
    setLista(Object.entries(listaPericias))
  }, [listaPericias])

  const changeValue = ({ target }) => {
    const { value, name } = target

    if (name === 'nome') {
      setNomePericias(value)
    } else if (name === 'modificador') {
      setModificador(value)
    }
  }

  const salvaPericias = () => {
    setListaPericias({ ...listaPericias, [nomePericias]: +modificador })

    setNomePericias('')
    setModificador('')
  }

  const editarItem = (index, { target }) => {
    const { value, name } = target

    const chaveAntiga = lista[index][0]
    const valorAntigo = lista[index][1]

    if (name === 'nome') {
      const novoObjeto = { ...listaPericias }
      delete novoObjeto[chaveAntiga]
      novoObjeto[value] = valorAntigo
      setListaPericias(novoObjeto)
    } else if (name === 'valor') {
      const novoObjeto = { ...listaPericias }
      novoObjeto[chaveAntiga] = +value
      setListaPericias(novoObjeto)
    }
  }

  return (
    <div id="pericia">
      {lista &&
        lista.map((pericia, index) => (
          <div key={pericia[0]} className="linhas-pericia criar-pericia">
            <input
              id="nome-pericia"
              onChange={(e) => editarItem(index, e)}
              type="text"
              name="nome"
              placeholder="nome pericia"
              value={pericia[0]}
              readOnly={!editando}
            />
            <input
              id="mod-pericia"
              onChange={(e) => editarItem(index, e)}
              type="text"
              name="valor"
              placeholder="Pericia"
              value={pericia[1]}
              readOnly={!editando}
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
          name="modificador"
          placeholder="+4"
          value={modificador}
        />
        <button onClick={() => salvaPericias()}>+</button>
      </div>
    </div>
  )
}

export default Pericias
