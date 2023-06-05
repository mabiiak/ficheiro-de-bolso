import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../context/Provider'
import './css/Pericias.css'

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

  const [filtro, setFiltro] = useState('')
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

  const filtrarMagia = (e) => {
    const busca = e.target.value
    setFiltro(busca)

    const listaFiltrada = listaAnotacoes.filter((item) =>
      Object.values(item).some((valor) => valor.toString().includes(busca)),
    )

    setLista(listaFiltrada)
  }

  return (
    <div id="pericia">
      <div>
        <input
          type="text"
          placeholder="filtrar item por nome ou nivel"
          onChange={(e) => filtrarMagia(e)}
          value={filtro}
        />
        <button
          onClick={() => {
            setFiltro('')
            setLista(listaAnotacoes)
          }}
        >
          x-limpar
        </button>
      </div>
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
