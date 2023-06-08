import React, { useContext } from 'react'
import { Context } from '../context/Provider'

function MagicSpace() {
  const { espacosMagia, setEspacosMagia, editando } = useContext(Context)

  const handleChange = (index, field, value) => {
    const updatedEspacosMagia = [...espacosMagia]
    updatedEspacosMagia[index][field] = value
    setEspacosMagia(updatedEspacosMagia)
  }

  return (
    <div className="espacos-de-magia">
      {espacosMagia.map((item, index) => (
        <div key={item.nivel}>
          {item.nivel === 'truque' ? (
            <>
              <p>{item.nivel}</p>
              <input
                type="number"
                value={item.usados}
                onChange={(e) => handleChange(index, 'usados', e.target.value)}
                disabled={!editando}
              />
            </>
          ) : (
            <>
              <p>nivel {item.nivel}</p>
              <input
                type="number"
                className="quantidade-espacos"
                value={item.quantidade}
                onChange={(e) =>
                  handleChange(index, 'quantidade', e.target.value)
                }
                disabled={!editando}
              />
              <input
                type="number"
                className="espacos-usados"
                value={item.usados}
                onChange={(e) => handleChange(index, 'usados', e.target.value)}
                disabled={!editando}
              />
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default MagicSpace
