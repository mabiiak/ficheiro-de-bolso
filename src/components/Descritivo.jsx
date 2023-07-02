import React, { useContext } from 'react'
import { Context } from '../context/Provider'
import './css/Descritivo.css'

export default function Descritivo() {
  const { descritivo, setDescritivo, moedas, setMoedas, editando } =
    useContext(Context)

  const changeValue = ({ target }) => {
    const { value, name, id } = target

    if (id === 'moedas') {
      setMoedas({ ...moedas, [name]: +value })
    } else {
      setDescritivo({ ...descritivo, [name]: value })
    }
  }

  return (
    <div id="descritivo">
      <div id="linha-nome">
        <label>
          Nome:
          <input
            name="nome"
            onChange={(e) => changeValue(e)}
            type="text"
            value={descritivo.nome}
            disabled={!editando}
          />
        </label>
      </div>
      <div id="linha-tripla">
        <label>
          Classe:
          <input
            name="classe"
            onChange={(e) => changeValue(e)}
            type="text"
            value={descritivo.classe}
            disabled={!editando}
          />
        </label>
        <label>
          Nivel:
          <input
            name="nivel"
            onChange={(e) => changeValue(e)}
            type="number"
            value={descritivo.nivel}
            disabled={!editando}
            placeholder='0'
          />
        </label>
        <label>
          Raça:
          <input
            name="raca"
            onChange={(e) => changeValue(e)}
            type="text"
            value={descritivo.raca}
            disabled={!editando}
          />
        </label>
      </div>
      <div id="linha-dupla">
        <label>
          Movimento:
          <input
            name="movimento"
            onChange={(e) => changeValue(e)}
            type="number"
            value={descritivo.movimento}
            disabled={!editando}
            placeholder='0'
          />
        </label>
        <label>
          Antec:
          <input
            name="antecedente"
            onChange={(e) => changeValue(e)}
            type="text"
            value={descritivo.antecedente}
            disabled={!editando}
          />
        </label>
        <label>
          Alinh.
          <input
            name="alinhamento"
            onChange={(e) => changeValue(e)}
            type="text"
            value={descritivo.alinhamento}
            disabled={!editando}
          />
        </label>
      </div>
      <div id="linha-moedas">
        <label>
          PO
          <input
            id="moedas"
            name="po"
            onChange={(e) => changeValue(e)}
            type="number"
            value={moedas.po}
            disabled={!editando}
            placeholder='0'
          />
        </label>
        <label>
          PP
          <input
            id="moedas"
            name="pp"
            onChange={(e) => changeValue(e)}
            type="number"
            value={moedas.pp}
            disabled={!editando}
            placeholder='0'
          />
        </label>
        <label>
          PC
          <input
            id="moedas"
            name="pc"
            onChange={(e) => changeValue(e)}
            type="number"
            value={moedas.pc}
            disabled={!editando}
            placeholder='0'
          />
        </label>
        <label>
          PB
          <input
            id="moedas"
            name="pb"
            onChange={(e) => changeValue(e)}
            type="number"
            value={moedas.pb}
            disabled={!editando}
            placeholder='0'
          />
        </label>
      </div>
    </div>
  )
}
