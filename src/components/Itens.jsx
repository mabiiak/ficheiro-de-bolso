import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../context/Provider'
import './css/Pericias.css'

function Itens() {
  const { listaItens, setListaItens, editando } = useContext(Context)

  const [nomeItens, setNomePericias] = useState('')
  const [descricao, setDescricao] = useState('')
  const [lista, setLista] = useState([])

  useEffect(() => {
    setLista(Object.entries(listaItens))
  }, [listaItens])

  const changeValue = ({ target }) => {
    const { value, name } = target

    if (name === 'nome') {
      setNomePericias(value)
    } else if (name === 'descricao') {
      setDescricao(value)
    }
  }

  const salvaItens = () => {
    setListaItens({ ...listaItens, [nomeItens]: descricao })

    setNomePericias('')
    setDescricao('')
  }

  const editarItem = (index, { target }) => {
    const { value, name } = target

    const chaveAntiga = lista[index][0]
    const valorAntigo = lista[index][1]

    if (name === 'nome') {
      const novoObjeto = { ...listaItens }
      delete novoObjeto[chaveAntiga]
      novoObjeto[value] = valorAntigo
      setListaItens(novoObjeto)
    } else if (name === 'valor') {
      const novoObjeto = { ...listaItens }
      novoObjeto[chaveAntiga] = +value
      setListaItens(novoObjeto)
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
          value={nomeItens}
        />
        <input
          onChange={(e) => changeValue(e)}
          type="number"
          name="descricao"
          placeholder="+4"
          value={descricao}
        />
        <button onClick={() => salvaItens()}>+</button>
      </div>
    </div>
  )
}

export default Itens
