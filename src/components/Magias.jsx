import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Provider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'
import Filtro from './genericos/Filtro'
import './css/Magias.css'
import MagicSpace from './MagicSpace'

export default function Magias() {
  const { listaAtaquesMagias, setListaAtaquesMagias, editando, editarLista, excluirItem } =
    useContext(Context)

  const [tituloMagia, setTituloMagia] = useState('')
  const [nivelMagia, setNivelMagia] = useState('')
  const [comentarioMagia, setComentarioMagia] = useState('')

  const [lista, setLista] = useState(listaAtaquesMagias)

  const [viewHidden, setViewHidden] = useState(true)
  const [mensagemErro, setMensagemErro] = useState('')

  useEffect(() => {
    setLista(listaAtaquesMagias)
  }, [listaAtaquesMagias])

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
      tituloMagia.length < 3 ||
      comentarioMagia.length < 3
    ) {
      setMensagemErro('Preencha os campos antes de salvar uma magia')
      setTimeout(() => {
        setMensagemErro('')
      }, '3000')
    } else {
      setListaAtaquesMagias([
        ...listaAtaquesMagias,
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
      <div style={{ paddingBottom: '3px'}}>
        <Filtro
          listaCompleta={listaAtaquesMagias}
          setListaExbicao={setLista}
          placeholder={'palavra chave'}
        />
      </div>

        <div>
          <div id="criar-magia">
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
            </div>
            <div>
            <input
              placeholder="comentario da magia"
              onChange={(e) => changeValue(e)}
              name="comentario"
              value={comentarioMagia}
            />
            <button onClick={() => salvarMagia()}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
            </div>
          </div>
          {mensagemErro && <p>{mensagemErro}</p>}
        </div>

      {lista &&
        lista.map((magia, index) => (
          <div key={index} id="panel-magic">
            <input
              className="campoEditavel"
              onClick={() => openContent()}
              onChange={(e) =>
                editarLista(e, index, setListaAtaquesMagias, listaAtaquesMagias)
              }
              name="nivel"
              value={magia.nivel}
              readOnly={!editando}
            />
            <div>
              <div id="title-magic">
                <input
                  className="campoEditavel"
                  onClick={() => openContent()}
                  onChange={(e) =>
                    editarLista(e, index, setListaAtaquesMagias, listaAtaquesMagias)
                  }
                  name="titulo"
                  value={magia.titulo}
                  readOnly={!editando}
                />
                {editando && (
                  <button
                    onClick={() =>
                      excluirItem(index, listaAtaquesMagias, setListaAtaquesMagias)
                    }
                    className="btn-trash btn-trash-magic"
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{ color: '#A04F4F' }}
                    />
                  </button>
                )}
              </div>

              <input
                hidden={viewHidden}
                className="campoEditavel"
                onChange={(e) =>
                  editarLista(e, index, setListaAtaquesMagias, listaAtaquesMagias)
                }
                name="comentario"
                value={magia.comentario}
                disabled={!editando}
              />
            </div>
          </div>
        ))}
    </div>
  )
}
