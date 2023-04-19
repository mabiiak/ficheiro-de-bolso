import React, { useState } from "react";
import './css/Proeficiencia.css';

function Proeficiencia() {
    const [listProeficiencia, setListaProeficiencia] = useState([{nome: "investigação", modificador: 4}]);

    return (
        <div id="proeficiencia">
            {
                listProeficiencia.length && listProeficiencia.map((item, index) => (
                    <div key={index} className='linhas-proeficiencia'>
                        <p>{item.nome}</p>
                        <p>{item.modificador}</p>
                    </div>
                ))
            }
            <div className="criar-proeficiencia">
                <input type="text" />
                <input type="number"/>
                <button>+</button>
            </div>
        </div>
    )
}

export default Proeficiencia;
