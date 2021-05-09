import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router'

import CatalogPage from '../pages/CatalogPage'
import Home from '../pages/Home'
import Login from '../pages/Login'

import { IState } from '../store';
import { IAuthState } from '../store/modules/auth/types';

export default function CommonRoutes() {
    const auth = useSelector<IState, IAuthState>(state => state.auth);

    return (
        <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login">
                    {auth.logged ? <Redirect to="/" /> : <Login />}
                </Route>
                <Route path="/catalogo" component={CatalogPage} />
            </Switch>
    )
}
