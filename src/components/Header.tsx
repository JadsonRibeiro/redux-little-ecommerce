import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IState } from '../store'
import { login, logout } from '../store/modules/auth/actions'
import { IAuthState } from '../store/modules/auth/types'

const user = {
    name: 'Jadson Ribeiro',
    email: 'jadson@email.com'
}

const Header = () => {
    const dispatch = useDispatch();
    const auth = useSelector<IState, IAuthState>(state => state.auth);


    const handleLogin = useCallback(() => {
        dispatch(login(user));
    }, [dispatch]);

    const handleLogout = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    return (
        <div>
            {auth.logged 
            ? (
                <>
                    <span>Logado</span>
                    <button 
                        type="button"
                        onClick={handleLogout}
                    >
                        Sair
                    </button>
                </>
            ): (
                <>
                    <span>Não Logado</span>
                    <button 
                        type="button"
                        onClick={handleLogin}
                    >
                        Fazer login
                    </button>
                </>
            )
            }
        </div>
    )
}

export default Header;