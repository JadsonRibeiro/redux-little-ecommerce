import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import OnlyAuth from '../pages/OnlyAuth';
import { IState } from '../store';
import { IAuthState } from '../store/modules/auth/types';

export default function AuthRoutes() {
    const auth = useSelector<IState, IAuthState>(state => state.auth);

    return (
        <Switch>
            {auth.logged && (
                <Route exact path="/only-auth" component={OnlyAuth} />
            )}
        </Switch>
    )
}
