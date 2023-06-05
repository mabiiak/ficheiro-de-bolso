import React from 'react'

import Habilidades from '../components/Habilidades'
import Pericias from '../components/Pericias'

import Cabeçalho from '../components/Cabeçalho'
import TituloExpansivo from '../components/genericos/TituloExpansivo'
import Descritivo from '../components/Descritivo'
import Status from '../components/Status'
import Magias from '../components/Magias'
import BotaoEditar from '../components/BotaoEditar'
import Itens from '../components/Itens'
import Proeficiencias from '../components/Proeficiencias'
import Anotacoes from '../components/Anotacoes'

export default function Ficha() {
  const habilidadesPericias = () => (
    <div id="setaGrid">
      <Habilidades />
      <Pericias />
    </div>
  )

  const listaMagias = () => <Magias />
  const listaItens = () => <Itens />
  const listaProeficiencias = () => <Proeficiencias />
  const listaAnotacoes = () => <Anotacoes />

  return (
    <div>
      <Cabeçalho titulo={'Criar Personagem'} />
      <Descritivo />
      <Status />
      <TituloExpansivo
        titulo="Habilidades e Pericias"
        body={habilidadesPericias()}
      />
      <TituloExpansivo titulo="Magias" body={listaMagias()} />
      <TituloExpansivo titulo="Itens" body={listaItens()} />
      <TituloExpansivo
        titulo="Idiomas e Proeficiencias"
        body={listaProeficiencias()}
      />
      <TituloExpansivo titulo="Anotações" body={listaAnotacoes()} />
      <BotaoEditar />
    </div>
  )
}
