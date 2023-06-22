import React, { useContext } from 'react'
import { Context } from '../context/Provider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFloppyDisk, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import './css/BotaoEditar.css'

export default function BotaoEditar() {
  const {
    editando,
    setEditar,
    listaPericias,
    defineHabilidades,
    descritivo,
    moedas,
    status,
    espacosMagia,
    listaAtaquesMagias,
    listaItens,
    listaProeficiencias,
    listaAnotacoes,
    anotacaoLivre,
  } = useContext(Context)

  const salvaHabilidades = () => {
    localStorage.setItem(
      'personagem',
      JSON.stringify({
        descritivo,
        moedas,
        habilidades: { ...defineHabilidades },
        pericias: listaPericias,
        status,
        espacosMagia,
        magias: listaAtaquesMagias,
        itens: listaItens,
        proeficiencias: listaProeficiencias,
        anotacoes: listaAnotacoes,
        anotacaoLivre,
      }),
    )
  }

  function habilitarEdicao(e) {
    if (e.currentTarget.name === 'Salvar') {
      salvaHabilidades()
    }

    setEditar(!editando)
  }

  return (
    <button
      id="btn-edicao"
      name={editando ? 'Salvar' : 'Editar'}
      onClick={(e) => habilitarEdicao(e)}
    >
      {editando ? (
        <FontAwesomeIcon
          icon={faFloppyDisk}
          size="2xl"
          style={{ color: '#ededed' }}
          title="Salvar"
        />
      ) : (
        <FontAwesomeIcon
          icon={faPenToSquare}
          size="2xl"
          style={{ color: '#ededed' }}
          title="Editando"
        />
      )}
    </button>
  )
}
