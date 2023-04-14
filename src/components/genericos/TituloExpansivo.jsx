import React, { useState } from "react";
import './css/Titulos.css';

function TituloExpansivo({ titulo, body }) {
    const [viewHidden, setViewHidden] = useState(true);

    const openContent = () => {
        setViewHidden(!viewHidden);
    }

    return(
        <div id="geral">
            <div id="titulos" onClick={() => openContent()}>
                <p> {titulo} </p>
            </div>
            <div hidden={viewHidden}>
                {body}
            </div>
        </div>
    )
}

export default TituloExpansivo;
