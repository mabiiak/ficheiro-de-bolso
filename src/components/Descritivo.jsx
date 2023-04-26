import React from "react";
import './css/Descritivo.css';

export default function Descritivo() {
  return (
    <div id="descritivo">
        <div id="linha-nome">
            <label>
                Nome:
                <input type="text" />
            </label>
        </div>
        <div id="linha-tripla">
            <label>
                Classe 
                <input type="text" />
            </label>
            <label>
                Nivel 
                <input type="number" />
            </label>
            <label>
                Raça 
                <input type="text" />
            </label>
        </div>
        <div id="linha-dupla">
            <label>
                Antecedente
                <input type="text" />
            </label>
            <label>
                Alinhamento
                <input type="text" />
            </label>
        </div>
        <div id="linha-moedas">
            <label>
                PO
                <input type="number" />
            </label>
            <label>
                PP
                <input type="number" />
            </label>
            <label>
                PC
                <input type="number" />
            </label>
            <label>
                PB
                <input type="number" />
            </label>
        </div>
    </div>
  )
}
