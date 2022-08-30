import { useState } from 'react';
import './Input.css';

const Input = (props) => {



    const inputUser = (e) => {
        props.aoAlterado(e.target.value);
    }
 
     return (
        <div className="input-text">
            <label>{props.label}</label>
            <input value={props.valor} onChange={inputUser} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
     )
}

export default Input;