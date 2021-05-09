import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../components/Container'
import { loginRequest } from '../store/modules/auth/actions';

import '../styles/LoginPage.scss';

export default function Login() {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        if(!email || !password) 
            return;

        dispatch(loginRequest(email, password));
    }

    return (
        <Container>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="formControl">
                    <label htmlFor="email">
                        Email: 
                        <input 
                            type="text" 
                            id="email" 
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </label>
                </div>
                <div className="formControl">
                    <label htmlFor="password">
                        Senha: 
                        <input 
                            type="password" 
                            id="password" 
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </label>
                </div>
                <button type="submit">
                    Fazer Login
                </button>
            </form>
        </Container>
    )
}
