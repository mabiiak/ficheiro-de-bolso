import React, {useContext, useEffect, useState} from 'react';
import { Context } from '../context/Provider';

export default function Magias() {
    const {listaMagias, setListaMagias} = useContext(Context);
    const [editando, setEditar] = useState(false);
    const [statusCriacao, setStatusCriacao] = useState("");
    const [esconderCriacao, setEsconderCriacao] = useState(true);

    useEffect(() => {
        if (statusCriacao === "criando") {
            setEsconderCriacao(false);
        } else if (statusCriacao === "salvar") {
            setEsconderCriacao(true);
            setStatusCriacao("");
        };
    }, [statusCriacao]);

    function habilitarEdicao() {
        setEditar(!editando);
    };

    function editarItem(index, {target}) {
        const { value, name } = target;

        const novaListaMagias = [...listaMagias];
        novaListaMagias[index] = { ...novaListaMagias[index], [name]: value };
        setListaMagias(novaListaMagias);
    }

    return(
        <div>
            <div>
                Bloco de espaços de magia
            </div>

            <input type="text" placeholder="magia buscada" />
            <button
                // onClick={() => criarSalvar()}
            >
                Criar magia
            </button>
            {/* <div hidden={esconderCriacao}>
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
                <input
                    placeholder="descrição da magia"
                    onChange={(e) => changeValue(e)}
                    name="comentario"
                />
            </div> */
            }
            {
                listaMagias && listaMagias.map((magia, index) => (
                    <div key={magia.titulo}>
                        <input
                            className="campoEditavel"
                            onChange={(e) => editarItem(index, e)}
                            name="nivel"
                            value={magia.nivel}
                            readOnly={!editando}
                        />
                        <input
                            className="campoEditavel"
                            onChange={(e) => editarItem(index, e)}
                            name="titulo"
                            value={magia.titulo}
                            readOnly={!editando}
                        />
                        <input
                            className="campoEditavel"
                            onChange={(e) => editarItem(index, e)}
                            name="comentario"
                            value={magia.comentario}
                            readOnly={!editando}
                        />
                    </div>
                ))
            }
            <button onClick={habilitarEdicao}>{editando ? "Salvar" : "Editar"}</button>
        </div>
    )
};
