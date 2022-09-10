import React from 'react';
import './Modulo.css';

const Register = () => {

    return (
        <div className='register'>
            <h1>Cadastra-se</h1>
            <p>Crie usúario e comartilhe suas histórias</p>
            <form>
                <label>
                    <span>Nome:</span>
                    <input
                        type="text"
                        name='displayName'
                        required
                        placeholder='Nomme do usuário'
                    />
                    
                </label>
                <label>
                    <span>Email:</span>
                    <input
                        type="email"
                        name='displayEmail'
                        required
                        placeholder='Email do usuário'
                    />
                    
                </label>
                <label>
                    <span>Password:</span>
                    <input
                        type="password"
                        name='password'
                        required
                        placeholder='Senha do usuário'
                    />
                    <input
                        type="password"
                        name='confime'
                        required
                        placeholder='confirme Senha do usuário'
                    />
                </label>
                <button className='btn'>Cadastrar</button>
            </form>
        </div>
    )
}

export default Register;