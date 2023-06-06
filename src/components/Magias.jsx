import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Provider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Filtro from './genericos/Filtro'
import './css/Magias.css'

export default function Magias() {
  const { listaMagias, setListaMagias, editando, editarLista, excluirItem } =
    useContext(Context)

  const [tituloMagia, setTituloMagia] = useState('')
  const [nivelMagia, setNivelMagia] = useState('')
  const [comentarioMagia, setComentarioMagia] = useState('')

  const [lista, setLista] = useState(listaMagias)

  useEffect(() => {
    setLista(listaMagias)
  }, [listaMagias])

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

  return (
    <div>
      <div className="espacos-de-magia">
        <div>
          <p>nivel 1</p>
          <input type="number" className="quantidade-espacos" placeholder="0" />
          <input type="number" className="espacos-usados" />
        </div>
        <div>
          <p>nivel 2</p>
          <input type="number" className="quantidade-espacos" placeholder="0" />
          <input type="number" className="espacos-usados" />
        </div>
        <div>
          <p>nivel 3</p>
          <input type="number" className="quantidade-espacos" placeholder="0" />
          <input type="number" className="espacos-usados" />
        </div>
        <div>
          <p>nivel 4</p>
          <input type="number" className="quantidade-espacos" placeholder="0" />
          <input type="number" className="espacos-usados" />
        </div>
        <div>
          <p>nivel 5</p>
          <input type="number" className="quantidade-espacos" placeholder="0" />
          <input type="number" className="espacos-usados" />
        </div>
        <div>
          <p>nivel 6</p>
          <input type="number" className="quantidade-espacos" placeholder="0" />
          <input type="number" className="espacos-usados" />
        </div>
        <div>
          <p>nivel 7</p>
          <input type="number" className="quantidade-espacos" placeholder="0" />
          <input type="number" className="espacos-usados" />
        </div>
        <div>
          <p>nivel 8</p>
          <input type="number" className="quantidade-espacos" placeholder="0" />
          <input type="number" className="espacos-usados" />
        </div>
        <div>
          <p>nivel 9</p>
          <input type="number" className="quantidade-espacos" placeholder="0" />
          <input type="number" className="espacos-usados" />
        </div>
      </div>
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
      <button onClick={() => salvarMagia()}>+</button>

      {lista &&
        lista.map((magia, index) => (
          <div key={index}>
            <input
              className="campoEditavel"
              onChange={(e) =>
                editarLista(e, index, setListaMagias, listaMagias)
              }
              name="nivel"
              value={magia.nivel}
              readOnly={!editando}
            />
            <input
              className="campoEditavel"
              onChange={(e) =>
                editarLista(e, index, setListaMagias, listaMagias)
              }
              name="titulo"
              value={magia.titulo}
              readOnly={!editando}
            />
            <input
              className="campoEditavel"
              onChange={(e) =>
                editarLista(e, index, setListaMagias, listaMagias)
              }
              name="comentario"
              value={magia.comentario}
              readOnly={!editando}
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
