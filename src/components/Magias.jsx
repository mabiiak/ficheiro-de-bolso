import React, {useContext, useEffect, useState} from 'react';
import { Context } from '../context/Provider';

export default function Magias() {
    const {listaMagias, setListaMagias} = useContext(Context);
    const [editando, setEditar] = useState(false);
    const [statusCriacao, setStatusCriacao] = useState("");
    const [esconderCriacao, setEsconderCriacao] = useState(true);
    const [salvarMagia, setMagia] = useState({});

    useEffect(() => {
        let elExibicao = document.querySelectorAll('.texto');
        let elCampoEditavel = document.querySelectorAll('.campoEditavel');

        if (editando) {
            elExibicao.forEach(element => {
                element.style.display = 'none';
            });
            
            elCampoEditavel.forEach(element => {
                element.style.display = 'block';
            });
        } else {
            elCampoEditavel.forEach(element => {
                element.style.display = 'none';
            });

            elExibicao.forEach(element => {
                element.style.display = 'block';
            });
        }
    }, [editando]);

    useEffect(() => {
        if (statusCriacao === "criando") {
            setEsconderCriacao(false);
        } else if (statusCriacao === "salvar") {
            setEsconderCriacao(true);
            setStatusCriacao("");
        };
    }, [statusCriacao]);

    const habilitarEdicao = () => {
        setEditar(!editando);
    };

    const criarSalvar = () => {
        if (statusCriacao === "") {
            setStatusCriacao("criando");
        } else if (statusCriacao === "criando") {
            setListaMagias([...listaMagias, { ...salvarMagia }])
            setStatusCriacao("salvar");
        } 
    };

    const changeValue = ({target}) => {
        const { value, name } = target;
        setMagia({ ...salvarMagia, [name]: value });
    };

    return(
        <div>
            <div>
                Bloco de espaços de magia
            </div>

            <input type="text" placeholder="magia buscada" />
            <button onClick={() => criarSalvar()}>
                Adicionar magia/ Salvar
            </button>
            <div hidden={esconderCriacao}>
                <input
                    type="text"
                    onChange={(e) => changeValue(e)}
                    name="nivel"
                />
                <input
                    type="text"
                    onChange={(e) => changeValue(e)}
                    name="titulo"
                />
                <textarea
                    placeholder="descrição da magia"
                    onChange={(e) => changeValue(e)}
                    name="comentario"
                />
            </div>

            {
                listaMagias && listaMagias.map((magia) => (
                    <div key={magia.titulo}>
                        <p
                            className="texto"
                            name="nivel"
                            id="nivel"
                        >
                            {magia.nivel}
                        </p>
                        <input
                            className="campoEditavel"
                            onChange={() => console.log()}
                            name="nivel"
                            value={magia.nivel}
                        />
                        <p
                            className="texto"
                            name="titulo"
                            id="titulo"
                        >
                            {magia.titulo}
                        </p>
                        <input
                            className="campoEditavel"
                            onChange={() => console.log()}
                            name="titulo"
                            value={magia.titulo}
                        />
                        <p
                            className="texto"
                            name="comentario"
                            id="comentario"
                        >
                            {magia.comentario}
                        </p>
                        <textarea
                            className="campoEditavel"
                            onChange={() => console.log()}
                            name="comentario"
                            value={magia.comentario}
                        />
                        <p>_________________</p>
                    </div>
                ))
            }

            <button onClick={() => habilitarEdicao()}>Editar</button>

        </div>
    )
};
