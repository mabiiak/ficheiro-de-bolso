import React, { useState, useEffect, createContext } from 'react'
import PropTypes from 'prop-types'

export const Context = createContext()

function Provider({ children }) {
  const [descritivo, setDescritivo] = useState({
    nome: '',
    classe: '',
    nivel: 0,
    raca: '',
    antecedente: '',
    alinhamento: '',
  })

  const [moedas, setMoedas] = useState({
    po: 0,
    pp: 0,
    pc: 0,
    pb: 0,
  })

  const [defineHabilidades, setHabilidades] = useState({
    forca: 0,
    destreza: 0,
    constituicao: 0,
    inteligencia: 0,
    sabedoria: 0,
    carisma: 0,
  })

  const [status, setStatus] = useState({
    hpAtual: 0,
    hpMax: 0,
    cd: 0,
    ca: 0,
    mod: 0,
  })

  const [editando, setEditar] = useState(false)
  const [listaPericias, setListaPericias] = useState([])
  const [listaMagias, setListaMagias] = useState([])
  const [listaItens, setListaItens] = useState([])

  useEffect(() => {
    const verSalvos = JSON.parse(localStorage.getItem('personagem'))
    if (verSalvos) {
      setHabilidades(verSalvos.habilidades)
      setListaPericias(verSalvos.pericias)
      setDescritivo(verSalvos.descritivo)
      setStatus(verSalvos.status)
      setListaMagias(verSalvos.magias)
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
    setStatus,
    listaMagias,
    setListaMagias,
    listaItens,
    setListaItens,
  }

  return <Context.Provider value={estadosGlobais}>{children}</Context.Provider>
}

Provider.propTypes = {
  children: PropTypes.object.isRequired,
}

export default Provider
