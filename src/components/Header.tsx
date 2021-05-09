import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { IState } from '../store'
import { logout } from '../store/modules/auth/actions'
import { IAuthState } from '../store/modules/auth/types'

import '../styles/HeaderComponent.scss';

const Header = () => {
    const dispatch = useDispatch();
    const auth = useSelector<IState, IAuthState>(state => state.auth);

    const handleLogout = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    console.log('Auth', auth)

    return (
        <header>
            {auth.logged 
            ? (
                <>
                    <span>Olá, {auth.user?.email}</span>
                    <button 
                        type="button"
                        onClick={handleLogout}
                    >
                        Sair
                    </button>
                </>
            ): (
                <>
                    <div></div>
                    <Link to="/login">
                        <button 
                            type="button"
                        >
                            Fazer login
                        </button>
                    </Link>
                </>
            )
            }
        </header>
    )
}

export default Header;