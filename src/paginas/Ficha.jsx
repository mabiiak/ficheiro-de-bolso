import React, { useContext } from 'react'
import { Context } from '../context/Provider'

import TituloExpansivo from '../components/genericos/TituloExpansivo'
import ListaSimples from '../components/genericos/ListaSimples'
import BotaoEditar from '../components/BotaoEditar'

import Header from '../components/genericos/Header'
import Descritivo from '../components/Descritivo'
import Status from '../components/Status'
import Habilidades from '../components/Habilidades'
import Magias from '../components/Magias'

export default function Ficha() {
  const {
    descritivo,
    listaItens,
    setListaItens,
    listaPericias,
    setListaPericias,
    listaProeficiencias,
    setListaProeficiencias,
    listaAnotacoes,
    setListaAnotacoes,
  } = useContext(Context)

  const habilidadesPericias = () => (
    <div id="setaGrid">
      <Habilidades />
      <ListaSimples
        listaCompleta={listaPericias}
        setListaCompleta={setListaPericias}
        name={'pericias'}
      />
    </div>
  )

  const listaMagias = () => <Magias />

  const itens = () => (
    <ListaSimples
      listaCompleta={listaItens}
      setListaCompleta={setListaItens}
      name={'itens'}
    />
  )

  const proeficiencias = () => (
    <ListaSimples
      listaCompleta={listaProeficiencias}
      setListaCompleta={setListaProeficiencias}
      name={'proeficiencias'}
    />
  )

  const anotacoes = () => (
    <ListaSimples
      listaCompleta={listaAnotacoes}
      setListaCompleta={setListaAnotacoes}
      name={'anotacoes'}
    />
  )

  return (
    <div>
      <Header titulo={descritivo.nome || 'Criar Personagem'} />
      <Descritivo />
      <Status />
      <TituloExpansivo
        titulo="Habilidades e Pericias"
        body={habilidadesPericias()}
      />
      <TituloExpansivo titulo="Magias" body={listaMagias()} />
      <TituloExpansivo titulo="Itens" body={itens()} />
      <TituloExpansivo
        titulo="Idiomas e Proeficiencias"
        body={proeficiencias()}
      />
      <TituloExpansivo titulo="Anotações" body={anotacoes()} />
      <BotaoEditar />
    </div>
  )
}
