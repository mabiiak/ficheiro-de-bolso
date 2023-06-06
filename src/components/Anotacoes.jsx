import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../context/Provider'
import './css/Pericias.css'
import Filtro from './genericos/Filtro'

function Anotacoes() {
  const {
    listaAnotacoes,
    setListaAnotacoes,
    editando,
    editarLista,
    excluirItem,
  } = useContext(Context)

  const [chaveNome, setChaveNome] = useState('')
  const [chaveValor, setChaveValor] = useState('')

  const [lista, setLista] = useState(listaAnotacoes)

  useEffect(() => {
    setLista(listaAnotacoes)
  }, [listaAnotacoes])

  const obterValor = ({ target }) => {
    const { value, name } = target

    if (name === 'nome') {
      setChaveNome(value)
    }
  }

  const salvar = () => {
    setListaAnotacoes([
      ...listaAnotacoes,
      { nome: chaveNome, valor: +chaveValor },
    ])

    setChaveNome('')
    setChaveValor('')
  }

  return (
    <div id="pericia">
      <Filtro
        listaCompleta={listaAnotacoes}
        setListaExbicao={setLista}
        placeholder={'anotações'}
      />
      {lista &&
        lista.map((pericia, index) => (
          <div key={index} className="linhas-pericia criar-pericia">
            <input
              id="nome-pericia"
              onChange={(e) =>
                editarLista(e, index, setListaAnotacoes, listaAnotacoes)
              }
              type="text"
              name="nome"
              placeholder="nome item"
              value={pericia.nome}
              disabled={!editando}
              key={`valor_${index}`}
            />
            {editando && (
              <button
                onClick={() =>
                  excluirItem(index, listaAnotacoes, setListaAnotacoes)
                }
              >
                Excluir
              </button>
            )}
          </div>
        ))}
      <div className="criar-pericia">
        <input
          onChange={(e) => obterValor(e)}
          type="text"
          name="nome"
          placeholder="anotacao livre"
          value={chaveNome}
          required
        />
        <button type="submit" onClick={() => salvar()}>
          +
        </button>
      </div>
    </div>
  )
}

export default Anotacoes
