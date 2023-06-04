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
          Classe
          <input
            name="classe"
            onChange={(e) => changeValue(e)}
            type="text"
            value={descritivo.classe}
            disabled={!editando}
          />
        </label>
        <label>
          Nivel
          <input
            name="nivel"
            onChange={(e) => changeValue(e)}
            type="number"
            value={descritivo.nivel}
            disabled={!editando}
          />
        </label>
        <label>
          Raça
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
          Antecedente
          <input
            name="antecedente"
            onChange={(e) => changeValue(e)}
            type="text"
            value={descritivo.antecedente}
            disabled={!editando}
          />
        </label>
        <label>
          Alinhamento
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
          />
        </label>
      </div>
    </div>
  )
}
