import React, { useContext } from "react";
import { Context } from "../context/Provider";
import './css/Status.css'

export default function Status() {
    const { status, setStatus } = useContext(Context);

    const changeValue = ({target}) => {
        const { value, name } = target;

        setStatus({ ...status, [name]: +value });
    };

    return (
        <section id="status">
            <div className="status-triplo">
                <div className="linha-descritiva">
                    <p>HP</p>
                    <input
                        className="status-hpMax-input"
                        onChange={(e) => changeValue(e)}
                        type="number"
                        value={status.hpMax}
                        name="hpMax"
                    />
                </div>
                <input
                    className="status-input"
                    onChange={(e) => changeValue(e)}
                    type="number"
                    value={status.hpAtual}
                    name="hpAtual"
                />
            </div>
            <div className="status-triplo">
                <p className="linha-descritiva">CD</p>
                <input
                    className="status-input"
                    onChange={(e) => changeValue(e)}
                    type="number"
                    value={status.cd}
                    name="cd"
                />
            </div>
            <div className="status-triplo">
                <p className="linha-descritiva">CA</p>
                <input
                    className="status-input"
                    onChange={(e) => changeValue(e)}
                    type="number"
                    value={status.ca}
                    name="ca"
                />
            </div>
            <div className="status-triplo">
                <p className="linha-descritiva">MOD</p>
                <input
                    className="status-input"
                    onChange={(e) => changeValue(e)}
                    type="number"
                    value={status.mod}
                    name="mod"
                />
            </div>
        </section>
    )
}
