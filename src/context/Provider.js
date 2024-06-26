import React, { useState, useEffect, createContext } from 'react'
import PropTypes from 'prop-types'

export const Context = createContext()

function Provider({ children }) {
  const [descritivo, setDescritivo] = useState({
    nome: '',
    classe: '',
    nivel: '',
    raca: '',
    antecedente: '',
    alinhamento: '',
  })

  const [moedas, setMoedas] = useState({
    po: "",
    pp: "",
    pc: "",
    pb: "",
  })

  const [defineHabilidades, setHabilidades] = useState({
    forca: "",
    destreza: "",
    constituicao: "",
    inteligencia: "",
    sabedoria: "",
    carisma: "",
  })

  const [status, setStatus] = useState({
    hpAtual: "",
    hpMax: "",
    cd: "",
    ca: "",
    mod: "",
  })

  const [espacosMagia, setEspacosMagia] = useState([
    { nivel: 'truque', quantidade: 0 },
    { nivel: 1, quantidade: 0, usados: 0 },
    { nivel: 2, quantidade: 0, usados: 0 },
    { nivel: 3, quantidade: 0, usados: 0 },
    { nivel: 4, quantidade: 0, usados: 0 },
    { nivel: 5, quantidade: 0, usados: 0 },
    { nivel: 6, quantidade: 0, usados: 0 },
    { nivel: 7, quantidade: 0, usados: 0 },
    { nivel: 8, quantidade: 0, usados: 0 },
    { nivel: 9, quantidade: 0, usados: 0 },
  ])

  const [editando, setEditar] = useState(false)
  const [listaPericias, setListaPericias] = useState([])
  const [listaAtaquesMagias, setListaAtaquesMagias] = useState([])
  const [listaItens, setListaItens] = useState([])
  const [listaProeficiencias, setListaProeficiencias] = useState([])
  const [listaAnotacoes, setListaAnotacoes] = useState([])
  const [anotacaoLivre, setAnotacaoLivre] = useState([])

  const editarLista = (e, index, set, lista) => {
    const { value, name } = e.target

    const listaEditada = [...lista]
    listaEditada[index] = { ...listaEditada[index], [name]: value }
    set(listaEditada)
  }

  const excluirItem = (index, lista, setLista) => {
    const novoLista = lista.filter((_item, i) => i !== index)
    setLista(novoLista)
  }

  useEffect(() => {
    const verSalvos = JSON.parse(localStorage.getItem('personagem'))
    if (verSalvos) {
      setHabilidades(verSalvos.habilidades)
      setListaPericias(verSalvos.pericias)
      setDescritivo(verSalvos.descritivo)
      setStatus(verSalvos.status)
      setEspacosMagia(verSalvos.espacosMagia)
      setListaAtaquesMagias(verSalvos.magias)
      setListaItens(verSalvos.itens)
      setListaProeficiencias(verSalvos.proeficiencias)
      setListaAnotacoes(verSalvos.anotacoes)
      setAnotacaoLivre(verSalvos.anotacaoLivre)
    }
  }, [])

  const estadosGlobais = {
    editando,
    setEditar,
    defineHabilidades,
    setHabilidades,
    listaPericias,
    setListaPericias,
    descritivo,
    setDescritivo,
    moedas,
    setMoedas,
    status,
    espacosMagia,
    setEspacosMagia,
    setStatus,
    listaAtaquesMagias,
    setListaAtaquesMagias,
    listaItens,
    setListaItens,
    listaProeficiencias,
    setListaProeficiencias,
    listaAnotacoes,
    setListaAnotacoes,
    anotacaoLivre,
    setAnotacaoLivre,
    editarLista,
    excluirItem,
  }

  return <Context.Provider value={estadosGlobais}>{children}</Context.Provider>
}

Provider.propTypes = {
  children: PropTypes.object.isRequired,
}

export default Provider
