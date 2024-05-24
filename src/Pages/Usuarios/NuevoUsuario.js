import React from 'react';
import './NuevoUsuario.css';

const NuevoUsuario = () => {
    return (
        <form className="form">
            <p className="title">Registro </p>
            <div className="flex gap-3">
                <label>
                    <input required='on' placeholder="" type="text" className="input" />
                    <span>Nombre(s)</span>
                </label>
                <label>
                    <input required='on' placeholder="" type="text" className="input" />
                    <span>Apellidos</span>
                </label>
            </div>
            <label>
                <input required='on' placeholder="" type="email" className="input" />
                <span>Correo Electrónico</span>
            </label>
            <label>
                <select className="input" required='on'>
                    <option value=""></option>
                    <option value="area1">Área 1</option>
                    <option value="area2">Área 2</option>
                    <option value="area3">Área 3</option>
                </select>
                <span>Área</span>
            </label>
            <label>
                <input required='on' placeholder="" type="password" className="input" />
                <span>Contraseña</span>
            </label>
            <label>
                <input required='on' placeholder="" type="password" className="input" />
                <span>Confirmar Contraseña</span>
            </label>
            <button className="submit">Registrar</button>
        </form>
);}
export default NuevoUsuario;