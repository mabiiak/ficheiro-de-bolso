import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../context/Provider'
import './css/Pericias.css'

function Itens() {
  const { listaItens, setListaItens, editando, editarLista } =
    useContext(Context)

  const [chaveNome, setChaveNome] = useState('')
  const [chaveValor, setChaveValor] = useState('')

  const [filtro, setFiltro] = useState('')
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

  const filtrarMagia = (e) => {
    const busca = e.target.value
    setFiltro(busca)

    const listaFiltrada = listaItens.filter((item) =>
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
            setLista(listaItens)
          }}
        >
          x-limpar
        </button>
      </div>
      {lista.length &&
        lista.map((pericia, index) => (
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
