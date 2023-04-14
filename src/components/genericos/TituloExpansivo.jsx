import React, { useState } from "react";

function TitleExpansive({ titulo, body }) {
    const [viewHidden, setViewHidden] = useState(true);

    const openContent = () => {
        setViewHidden(!viewHidden);
    }

    return(
        <div>
            <div onClick={() => openContent()}>
                <h2> {titulo} </h2>
            </div>
            <div hidden={viewHidden}>
                {body}
            </div>
        </div>
    )
}

export default TitleExpansive;
