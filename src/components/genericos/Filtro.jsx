import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilterCircleXmark } from '@fortawesome/free-solid-svg-icons'

function Filtro({ listaCompleta, setListaExbicao, placeholder }) {
  const [filtro, setFiltro] = useState('')

  const filtrar = (e) => {
    const busca = e.target.value
    setFiltro(busca)

    const listaFiltrada =
      listaCompleta &&
      listaCompleta.filter((item) =>
        Object.values(item).some((valor) => valor.toString().includes(busca)),
      )

    setListaExbicao(listaFiltrada)
  }

  return (
    <div>
      <input
        type="text"
        placeholder={`filtrar item por ${placeholder}`}
        onChange={(e) => filtrar(e)}
        value={filtro}
      />
      {filtro && (
        <button
          onClick={() => {
            setFiltro('')
            setListaExbicao(listaCompleta)
          }}
          className="clean-filter"
        >
          <FontAwesomeIcon
            icon={faFilterCircleXmark}
            style={{ color: '#ededed' }}
          />
        </button>
      )}
    </div>
  )
}

export default Filtro
