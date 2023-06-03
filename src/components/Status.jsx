import React, { useContext } from 'react'
import { Context } from '../context/Provider'
import './css/Status.css'

export default function Status() {
  const { status, setStatus } = useContext(Context)

  const changeValue = ({ target }) => {
    const { value, name } = target

    setStatus({ ...status, [name]: +value })
  }

  return (
    <section id="status">
      <div id="status-triplo">
        <div className="linha-descritiva">
          <p>HP</p>
          <input
            onChange={(e) => changeValue(e)}
            type="number"
            value={status.hpMax}
            name="hpMax"
          />
        </div>
        <input
          onChange={(e) => changeValue(e)}
          type="number"
          value={status.hpAtual}
          name="hpAtual"
        />
      </div>
      <div className="status-duplo linha-descritiva">
        <p>CD</p>
        <input
          onChange={(e) => changeValue(e)}
          type="number"
          value={status.cd}
          name="cd"
        />
      </div>
      <div className="status-duplo linha-descritiva">
        <p>CA</p>
        <input
          onChange={(e) => changeValue(e)}
          type="number"
          value={status.ca}
          name="ca"
        />
      </div>
      <div className="status-duplo linha-descritiva">
        <p>MOD</p>
        <input
          onChange={(e) => changeValue(e)}
          type="number"
          value={status.mod}
          name="mod"
        />
      </div>
    </section>
  )
}
