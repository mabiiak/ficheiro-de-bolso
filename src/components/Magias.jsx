import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Provider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'
import Filtro from './genericos/Filtro'
import './css/Magias.css'
import MagicSpace from './MagicSpace'

export default function Magias() {
  const { listaMagias, setListaMagias, editando, editarLista, excluirItem } =
    useContext(Context)

  const [tituloMagia, setTituloMagia] = useState('')
  const [nivelMagia, setNivelMagia] = useState('')
  const [comentarioMagia, setComentarioMagia] = useState('')

  const [lista, setLista] = useState(listaMagias)

  const [viewHidden, setViewHidden] = useState(true)
  const [mensagemErro, setMensagemErro] = useState('')

  useEffect(() => {
    setLista(listaMagias)
  }, [listaMagias])

  const openContent = () => {
    setViewHidden(!viewHidden)
  }

  const changeValue = ({ target }) => {
    const { value, name } = target

    switch (name) {
      case 'nivel':
        setNivelMagia(value)
        break
      case 'titulo':
        setTituloMagia(value)
        break
      case 'comentario':
        setComentarioMagia(value)
        break
      default:
        console.log('Parece que algo deu errado, procure o sábio mais próximo')
        break
    }
  }

  const salvarMagia = () => {
    if (
      nivelMagia.length < 3 ||
      tituloMagia.length < 3 ||
      comentarioMagia.length < 3
    ) {
      setMensagemErro('Preencha os campos antes de salvar uma magia')
      setTimeout(() => {
        setMensagemErro('')
      }, '3000')
    } else {
      setListaMagias([
        ...listaMagias,
        {
          nivel: nivelMagia,
          titulo: tituloMagia,
          comentario: comentarioMagia,
        },
      ])

      setTituloMagia('')
      setNivelMagia('')
      setComentarioMagia('')
    }
  }

  return (
    <div>
      <MagicSpace />
      <Filtro
        listaCompleta={listaMagias}
        setListaExbicao={setLista}
        placeholder={'magia ou nivel'}
      />
      <div>
        <input
          placeholder="nivel da magia"
          type="text"
          onChange={(e) => changeValue(e)}
          name="nivel"
          value={nivelMagia}
        />
        <input
          placeholder="titulo da magia"
          type="text"
          onChange={(e) => changeValue(e)}
          name="titulo"
          value={tituloMagia}
        />
        <input
          placeholder="comentario da magia"
          onChange={(e) => changeValue(e)}
          name="comentario"
          value={comentarioMagia}
        />
      </div>
      {mensagemErro && <p>{mensagemErro}</p>}
      <button onClick={() => salvarMagia()}>
        <FontAwesomeIcon icon={faPlus} />
      </button>

      {lista &&
        lista.map((magia, index) => (
          <div key={index}>
            <div onClick={() => openContent()}>
              <input
                className="campoEditavel"
                onChange={(e) =>
                  editarLista(e, index, setListaMagias, listaMagias)
                }
                name="nivel"
                value={magia.nivel}
                disabled={!editando}
              />

              <input
                className="campoEditavel"
                onChange={(e) =>
                  editarLista(e, index, setListaMagias, listaMagias)
                }
                name="titulo"
                value={magia.titulo}
                disabled={!editando}
              />
            </div>
            <input
              hidden={viewHidden}
              className="campoEditavel"
              onChange={(e) =>
                editarLista(e, index, setListaMagias, listaMagias)
              }
              name="comentario"
              value={magia.comentario}
              disabled={!editando}
            />
            {editando && (
              <button
                onClick={() => excluirItem(index, listaMagias, setListaMagias)}
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
