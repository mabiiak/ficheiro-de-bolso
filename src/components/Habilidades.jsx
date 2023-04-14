import React, { useState } from 'react';
import './css/Habilidade.css';

function Habilidades() {

  const [ forca, setForca ] = useState(0);
  const [ destreza, setDestreza ] = useState(0);
  const [ constituicao, setConstituicao ] = useState(0);
  const [ inteligencia, setInteligencia ] = useState(0);
  const [ sabedoria, setSabedoria ] = useState(0);
  const [ carisma, setCarisma ] = useState(0);

  const changeValue = ({ target }) => {
    const { value, name } = target;

    switch (name) {
      case 'Forca' :
        setForca(value);
        break;

      case 'Destreza' :
        setDestreza(value);
        break;

      case 'Constituicao':
        setConstituicao(value);
        break;

      case 'Inteligencia' :
        setInteligencia(value);
        break;

      case 'Sabedoria' :
        setSabedoria(value);
        break;

      case 'Carisma':
        setCarisma(value);
        break;
      default :
        console.log("Pericia não encontrada");
        break;
    }
  }

  const calcMoficador = (habilidade) => {
    habilidade = parseInt(habilidade);

    if (habilidade >= 0 && habilidade <= 1) {
      return '-5';

    } else if (habilidade >= 2 && habilidade <= 3) {
      return '-4';

    } else if (habilidade >= 4 && habilidade <= 5) {
      return '-3';

    } else if (habilidade >= 6 && habilidade <= 7) {
      return '-2';

    } else if (habilidade >= 8 && habilidade <= 9) {
      return '-1';

    } else if (habilidade >= 10 && habilidade <= 11) {
      return '+0';

    } else if (habilidade >= 12 && habilidade <= 13) {
      return '+1';

    } else if (habilidade >= 14 && habilidade <= 15) {
      return '+2';

    } else if (habilidade >= 16 && habilidade <= 17) {
      return '+3';

    } else if (habilidade >= 18 && habilidade <= 19) {
      return '+4';

    } else if (habilidade >= 20 && habilidade <= 21) {
      return '+5';

    } else if (habilidade >= 22 && habilidade <= 23) {
      return '+6';

    } else if (habilidade >= 24 && habilidade <= 25) {
      return '+7';

    } else if (habilidade >= 26 && habilidade <= 27) {
      return '+8';

    } else if (habilidade >= 28 && habilidade <= 29) {
      return '+9';

    } else {
      return '+10';
    }
  }

  return (
    <div id="habilidade">
      <div className='linhas'>
        <input
          type="number"
          name="Forca"
          value={forca}
          onChange={(e) => changeValue(e)}
        />
        <p>Força</p>
        <span>{calcMoficador(forca)}</span>
      </div>
      
      <div className='linhas'>
        <input
          type="number"
          name="Destreza"
          value={destreza}
          onChange={(e) => changeValue(e)}
        />
        <p>Destreza</p>
        <span>{calcMoficador(destreza)}</span>
      </div>
      <div className='linhas'>
        <input
          type="number"
          name="Constituição"
          value={constituicao}
          onChange={(e) => changeValue(e)}
        />
        <p>Constituição</p>
        <span>{calcMoficador(constituicao)}</span>
      </div>
      <div className='linhas'>
        <input
          type="number"
          name="Inteligencia"
          value={inteligencia}
          onChange={(e) => changeValue(e)}
        />
        <p>Inteligencia</p>
        <span>{calcMoficador(inteligencia)}</span>
      </div>
      <div className='linhas'>
        <input
          type="number"
          name="Sabedoria"
          value={sabedoria}
          onChange={(e) => changeValue(e)}
        />
        <p>Sabedoria</p>
        <span>{calcMoficador(sabedoria)}</span>
      </div>
      <div className='linhas'>
        <input
          type="number"
          name="Carisma"
          value={carisma}
          onChange={(e) => changeValue(e)}
        />
        <p>Carisma</p>
        <span>{calcMoficador(carisma)}</span>
      </div>
    </div>
  );
}

export default Habilidades;
