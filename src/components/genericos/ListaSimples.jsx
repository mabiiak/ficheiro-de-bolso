import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../../context/Provider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'
import Filtro from './Filtro'

function ListaSimples({ listaCompleta, setListaCompleta, name }) {
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
    } else {
      setChaveValor(value)
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
      {name !== 'pericias' && (
        <Filtro
          listaCompleta={listaCompleta}
          setListaExbicao={setLista}
          placeholder={`${name}`}
        />
      )}
      <div className="criar-pericia">
        {(name === 'pericias' || name === 'itens') && (
          <input
            onChange={(e) => obterValor(e)}
            type="number"
            name="valor"
            placeholder={name === 'pericias' ? 'modificador' : 'quantidade'}
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
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      {lista &&
        lista.map(({ nome, valor }, index) => (
          <div key={index} className="linhas-pericia criar-pericia">
            <input
              onChange={(e) =>
                editarLista(e, index, setListaCompleta, listaCompleta)
              }
              type="text"
              name="nome"
              placeholder="nome item"
              value={nome}
              disabled={!editando}
              key={`valor_${index}`}
            />
            {name === 'itens' && (
              <input
                onChange={(e) =>
                  editarLista(e, index, setListaCompleta, listaCompleta)
                }
                type="text"
                name="nome"
                placeholder="quantidade"
                value={valor}
                disabled={!editando}
                key={`valor_${index}`}
              />
            )}
            {editando && (
              <button
                onClick={() =>
                  excluirItem(index, listaCompleta, setListaCompleta)
                }
                className="btn-trash"
              >
                <FontAwesomeIcon icon={faTrash} style={{ color: '#A04F4F' }} />
              </button>
            )}
          </div>
        ))}
    </div>
  )
}

export default ListaSimples
