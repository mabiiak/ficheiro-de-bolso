import React, { useContext, useState } from 'react'
import { Context } from '../context/Provider'
import './css/Pericias.css'

function Itens() {
  const { listaItens, setListaItens, editando, editarLista } =
    useContext(Context)

  const [chaveNome, setChaveNome] = useState('')
  const [chaveValor, setChaveValor] = useState('')

  const obterValor = ({ target }) => {
    const { value, name } = target

    if (name === 'nome') {
      setChaveNome(value)
    } else if (name === 'valor') {
      setChaveValor(value)
    }
  }

  const salvaPericias = () => {
    setListaItens([...listaItens, { nome: chaveNome, valor: +chaveValor }])

    setChaveNome('')
    setChaveValor('')
  }

  return (
    <div id="pericia">
      {listaItens.length &&
        listaItens.map((pericia, index) => (
          <div key={index} className="linhas-pericia criar-pericia">
            <input
              id="mod-pericia"
              onChange={(e) => editarLista(e, index, setListaItens, listaItens)}
              type="text"
              name="valor"
              placeholder="QTD"
              value={pericia.valor}
              readOnly={!editando}
            />
            <input
              id="nome-pericia"
              onChange={(e) => editarLista(e, index, setListaItens, listaItens)}
              type="text"
              name="nome"
              placeholder="nome item"
              value={pericia.nome}
              disabled={!editando}
              key={`valor_${index}`}
            />
            {editando && <button>Excluir</button>}
          </div>
        ))}
      <div className="criar-pericia">
        <input
          onChange={(e) => obterValor(e)}
          type="number"
          name="valor"
          placeholder="quantidade"
          value={chaveValor}
        />
        <input
          onChange={(e) => obterValor(e)}
          type="text"
          name="nome"
          placeholder="item"
          value={chaveNome}
        />
        <button onClick={() => salvaPericias()}>+</button>
      </div>
    </div>
  )
}

export default Itens
