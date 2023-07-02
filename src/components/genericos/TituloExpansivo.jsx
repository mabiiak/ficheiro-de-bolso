import React, { useState, useRef } from 'react'
import '../css/Titulos.css'

function TituloExpansivo({ titulo, body }) {
  const [expanded, setExpanded] = useState(false);
  const [divHeight, setDivHeight] = useState(0);

  const openContent = () => {
    setExpanded(!expanded);
    setDivHeight(expanded ? 0 : divRef.current.scrollHeight);
  };

  const divRef = useRef(null);

  const handleTransitionEnd = () => {
      if (expanded) {
        setDivHeight(divRef.current.scrollHeight);
      } else {
        setDivHeight(0);
      }
    };

  return (
    <section
      ref={divRef}
      className={`geral expandable ${expanded ? "expanded" : ""}`}
    >
      <p id="titulos" onClick={openContent}>
        {titulo}
      </p>
      <div

        style={{
          maxHeight: divHeight,
          overflow: "hidden",
          transition: "max-height 0.05s linear",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {body}
      </div>
    </section>
  )
}

export default TituloExpansivo
