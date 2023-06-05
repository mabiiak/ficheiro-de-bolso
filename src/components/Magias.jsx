import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Provider'
import './css/Magias.css'

export default function Magias() {
  const { listaMagias, setListaMagias, editando, editarLista, excluirItem } =
    useContext(Context)

  const [tituloMagia, setTituloMagia] = useState('')
  const [nivelMagia, setNivelMagia] = useState('')
  const [comentarioMagia, setComentarioMagia] = useState('')

  const [filtro, setFiltro] = useState('')
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

  const filtrarMagia = (e) => {
    const busca = e.target.value
    setFiltro(busca)

    const listaFiltrada = listaMagias.filter((magia) =>
      Object.values(magia).some((valor) => valor.includes(busca)),
    )

    setLista(listaFiltrada)
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
      <div>
        <input
          type="text"
          placeholder="filtrar magia por nome ou nivel"
          onChange={(e) => filtrarMagia(e)}
          value={filtro}
        />
        <button
          onClick={() => {
            setFiltro('')
            setLista(listaMagias)
          }}
        >
          x-limpar
        </button>
      </div>
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
              >
                Excluir
              </button>
            )}
          </div>
        ))}
    </div>
  )
}
