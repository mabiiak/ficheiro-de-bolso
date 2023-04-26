import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/Provider";
import './css/Pericias.css';

function Pericias() {
    const { listaPericias, setListaPericias } = useContext(Context);

    const [nomePericias, setNomePericias] = useState("");
    const [modificador, setModificador] = useState("");
    const [lista, setLista] = useState([]);

    useEffect(() => {
        setLista(Object.entries(listaPericias));
    }, [listaPericias]);


    const changeValue = ({target}) => {
        const { value, name } = target;

        if (name === "nome") {
            setNomePericias(value);
        } else if (name === "modificador") {
            setModificador(value);
        };
    };

    const salvaPericias = () => {
        setListaPericias({... listaPericias, [nomePericias]: +modificador});
        setLista(Object.entries({... listaPericias, [nomePericias]: +modificador}));

        setNomePericias("");
        setModificador("");
    };

    return (
        <div id="pericia">
            {
                lista.map(([nome, valor]) => (
                    <div key={nome} className='linhas-pericia'>
                        <p id="nome-pericia">{nome}</p>
                        <p id="mod-pericia">{valor}</p>
                    </div>
                ))
            }
            <div className="criar-pericia">
                <input
                    onChange={(e) => changeValue(e)}
                    type="text"
                    name="nome"
                    placeholder="Pericia"
                    value={nomePericias}
                />
                <input
                    onChange={(e) => changeValue(e)}
                    type="number"
                    name="modificador"
                    placeholder="+4"
                    value={modificador}
                />
                <button onClick={() => salvaPericias()}>+</button>
            </div>
        </div>
    )
}

export default Pericias;
