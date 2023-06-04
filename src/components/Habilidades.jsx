import React, { useContext } from 'react'
import { Context } from '../context/Provider'
import './css/Habilidade.css'

function Habilidades() {
  const { defineHabilidades, setHabilidades, editando } = useContext(Context)

  const changeValue = ({ target }) => {
    const { value, name } = target

    switch (name) {
      case 'Forca':
        setHabilidades({ ...defineHabilidades, forca: value })
        break

      case 'Destreza':
        setHabilidades({ ...defineHabilidades, destreza: value })
        break

      case 'Constituicao':
        setHabilidades({ ...defineHabilidades, constituicao: value })
        break

      case 'Inteligencia':
        setHabilidades({ ...defineHabilidades, inteligencia: value })
        break

      case 'Sabedoria':
        setHabilidades({ ...defineHabilidades, sabedoria: value })
        break

      case 'Carisma':
        setHabilidades({ ...defineHabilidades, carisma: value })
        break
      default:
        console.log('Pericia não encontrada')
        break
    }
  }

  const calcMoficador = (habilidade) => {
    habilidade = parseInt(habilidade)

    if (habilidade >= 0 && habilidade <= 1) {
      return '-5'
    } else if (habilidade >= 2 && habilidade <= 3) {
      return '-4'
    } else if (habilidade >= 4 && habilidade <= 5) {
      return '-3'
    } else if (habilidade >= 6 && habilidade <= 7) {
      return '-2'
    } else if (habilidade >= 8 && habilidade <= 9) {
      return '-1'
    } else if (habilidade >= 10 && habilidade <= 11) {
      return '+0'
    } else if (habilidade >= 12 && habilidade <= 13) {
      return '+1'
    } else if (habilidade >= 14 && habilidade <= 15) {
      return '+2'
    } else if (habilidade >= 16 && habilidade <= 17) {
      return '+3'
    } else if (habilidade >= 18 && habilidade <= 19) {
      return '+4'
    } else if (habilidade >= 20 && habilidade <= 21) {
      return '+5'
    } else if (habilidade >= 22 && habilidade <= 23) {
      return '+6'
    } else if (habilidade >= 24 && habilidade <= 25) {
      return '+7'
    } else if (habilidade >= 26 && habilidade <= 27) {
      return '+8'
    } else if (habilidade >= 28 && habilidade <= 29) {
      return '+9'
    } else {
      return '+10'
    }
  }

  return (
    <div id="habilidade">
      <div className="linhas">
        <input
          type="number"
          name="Forca"
          value={+defineHabilidades.forca}
          onChange={(e) => changeValue(e)}
          readOnly={!editando}
        />
        <p>Força</p>
        <span>{calcMoficador(defineHabilidades.forca)}</span>
      </div>

      <div className="linhas">
        <input
          type="number"
          name="Destreza"
          value={+defineHabilidades.destreza}
          onChange={(e) => changeValue(e)}
          readOnly={!editando}
        />
        <p>Destreza</p>
        <span>{calcMoficador(defineHabilidades.destreza)}</span>
      </div>
      <div className="linhas">
        <input
          type="number"
          name="Constituicao"
          value={+defineHabilidades.constituicao}
          onChange={(e) => changeValue(e)}
          readOnly={!editando}
        />
        <p>Constituição</p>
        <span>{calcMoficador(defineHabilidades.constituicao)}</span>
      </div>
      <div className="linhas">
        <input
          type="number"
          name="Inteligencia"
          value={+defineHabilidades.inteligencia}
          onChange={(e) => changeValue(e)}
          readOnly={!editando}
        />
        <p>Inteligencia</p>
        <span>{calcMoficador(defineHabilidades.inteligencia)}</span>
      </div>
      <div className="linhas">
        <input
          type="number"
          name="Sabedoria"
          value={+defineHabilidades.sabedoria}
          onChange={(e) => changeValue(e)}
          readOnly={!editando}
        />
        <p>Sabedoria</p>
        <span>{calcMoficador(defineHabilidades.sabedoria)}</span>
      </div>
      <div className="linhas">
        <input
          type="number"
          name="Carisma"
          value={+defineHabilidades.carisma}
          onChange={(e) => changeValue(e)}
          readOnly={!editando}
        />
        <p>Carisma</p>
        <span>{calcMoficador(defineHabilidades.carisma)}</span>
      </div>
    </div>
  )
}

export default Habilidades
