import React, { useContext, useState } from 'react'
import { Context } from '../context/Provider'

export default function Magias() {
  const { listaMagias, setListaMagias, editando } = useContext(Context)

  const [tituloMagia, setTituloMagia] = useState('')
  const [nivelMagia, setNivelMagia] = useState('')
  const [comentarioMagia, setComentarioMagia] = useState('')

  function editarItem(index, { target }) {
    const { value, name } = target

    const novaListaMagias = [...listaMagias]
    novaListaMagias[index] = { ...novaListaMagias[index], [name]: value }
    setListaMagias(novaListaMagias)
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
      {/*
            <div>Bloco de espaços de magia</div>
            <input type="text" placeholder="filtrar magia" />
            */}

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

      {listaMagias &&
        listaMagias.map((magia, index) => (
          <div key={magia.titulo}>
            <input
              className="campoEditavel"
              onChange={(e) => editarItem(index, e)}
              name="nivel"
              value={magia.nivel}
              readOnly={!editando}
            />
            <input
              className="campoEditavel"
              onChange={(e) => editarItem(index, e)}
              name="titulo"
              value={magia.titulo}
              readOnly={!editando}
            />
            <input
              className="campoEditavel"
              onChange={(e) => editarItem(index, e)}
              name="comentario"
              value={magia.comentario}
              readOnly={!editando}
            />
          </div>
        ))}
    </div>
  )
}
