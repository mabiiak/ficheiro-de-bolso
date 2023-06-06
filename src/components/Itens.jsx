import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../context/Provider'
import Filtro from './genericos/Filtro'

function Itens() {
  const { listaItens, setListaItens, editando, editarLista, excluirItem } =
    useContext(Context)

  const [chaveNome, setChaveNome] = useState('')
  const [chaveValor, setChaveValor] = useState('')

  const [lista, setLista] = useState(listaItens)

  useEffect(() => {
    setLista(listaItens)
  }, [listaItens])

  const obterValor = ({ target }) => {
    const { value, name } = target

    if (name === 'nome') {
      setChaveNome(value)
    } else if (name === 'valor') {
      setChaveValor(value)
    }
  }

  const salvar = () => {
    setListaItens([...listaItens, { nome: chaveNome, valor: +chaveValor }])

    setChaveNome('')
    setChaveValor('')
  }

  return (
    <div>
      <Filtro
        listaCompleta={listaItens}
        setListaExbicao={setLista}
        placeholder={'itens'}
      />
      {lista.length &&
        lista.map((pericia, index) => (
          <div key={index} className="linhas-pericia criar-pericia">
            <input
              onChange={(e) => editarLista(e, index, setListaItens, listaItens)}
              type="text"
              name="valor"
              placeholder="QTD"
              value={pericia.valor}
              readOnly={!editando}
            />
            <input
              onChange={(e) => editarLista(e, index, setListaItens, listaItens)}
              type="text"
              name="nome"
              placeholder="nome item"
              value={pericia.nome}
              disabled={!editando}
              key={`valor_${index}`}
            />
            {editando && (
              <button
                onClick={() => excluirItem(index, listaItens, setListaItens)}
              >
                Excluir
              </button>
            )}
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
        <button type="submit" onClick={() => salvar()}>
          +
        </button>
      </div>
    </div>
  )
}

export default Itens
