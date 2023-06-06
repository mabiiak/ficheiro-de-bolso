import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../context/Provider'
import './css/Pericias.css'
import Filtro from './genericos/Filtro'

function Proeficiencias() {
  const {
    listaProeficiencias,
    setListaProeficiencias,
    editando,
    editarLista,
    excluirItem,
  } = useContext(Context)

  const [chaveNome, setChaveNome] = useState('')
  const [chaveValor, setChaveValor] = useState('')

  const [lista, setLista] = useState(listaProeficiencias)

  useEffect(() => {
    setLista(listaProeficiencias)
  }, [listaProeficiencias])

  const obterValor = ({ target }) => {
    const { value, name } = target

    if (name === 'nome') {
      setChaveNome(value)
    }
  }

  const salvar = () => {
    setListaProeficiencias([
      ...listaProeficiencias,
      { nome: chaveNome, valor: +chaveValor },
    ])

    setChaveNome('')
    setChaveValor('')
  }

  return (
    <div id="pericia">
      <Filtro
        listaCompleta={listaProeficiencias}
        setListaExbicao={setLista}
        placeholder={'idiomas ou proeficiencias'}
      />
      {lista &&
        lista.map((pericia, index) => (
          <div key={index} className="linhas-pericia criar-pericia">
            <input
              id="nome-pericia"
              onChange={(e) =>
                editarLista(
                  e,
                  index,
                  setListaProeficiencias,
                  listaProeficiencias,
                )
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
                  excluirItem(
                    index,
                    listaProeficiencias,
                    setListaProeficiencias,
                  )
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
          placeholder="item"
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

export default Proeficiencias
