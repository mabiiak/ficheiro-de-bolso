import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../../context/Provider'
import Filtro from './Filtro'

function ListaSimples({ listaCompleta, setListaCompleta, itens }) {
  const { editando, editarLista, excluirItem } = useContext(Context)

  const [chaveNome, setChaveNome] = useState('')
  const [chaveValor, setChaveValor] = useState('')

  const [lista, setLista] = useState()

  useEffect(() => {
    setLista(listaCompleta)
  }, [listaCompleta])

  const obterValor = ({ target }) => {
    const { value, name } = target

    if (name === 'nome') {
      setChaveNome(value)
    }
  }

  const salvar = () => {
    setListaCompleta([
      ...listaCompleta,
      { nome: chaveNome, valor: +chaveValor },
    ])

    setChaveNome('')
    setChaveValor('')
  }

  return (
    <div>
      <Filtro
        listaCompleta={listaCompleta}
        setListaExbicao={setLista}
        placeholder={'idiomas ou proeficiencias'}
      />
      <div className="criar-pericia">
        {editando && (
          <input
            onChange={(e) => obterValor(e)}
            type="number"
            name="valor"
            placeholder="quantidade"
            value={chaveValor}
          />
        )}
        <input
          onChange={(e) => obterValor(e)}
          type="text"
          name="nome"
          placeholder="item"
          value={chaveNome}
          required
        />
        <button type="submit" onClick={() => salvar()}>
          +
        </button>
      </div>
      {lista &&
        lista.map((pericia, index) => (
          <div key={index} className="linhas-pericia criar-pericia">
            <input
              onChange={(e) =>
                editarLista(e, index, setListaCompleta, listaCompleta)
              }
              type="text"
              name="nome"
              placeholder="nome item"
              value={pericia.nome}
              disabled={!editando}
              key={`valor_${index}`}
            />
            {itens && (
              <input
                onChange={(e) =>
                  editarLista(e, index, setListaCompleta, listaCompleta)
                }
                type="text"
                name="nome"
                placeholder="nome item"
                value={pericia.nome}
                disabled={!editando}
                key={`valor_${index}`}
              />
            )}
            {editando && (
              <button
                onClick={() =>
                  excluirItem(index, listaCompleta, setListaCompleta)
                }
              >
                Excluir
              </button>
            )}
          </div>
        ))}
    </div>
  )
}

export default ListaSimples
