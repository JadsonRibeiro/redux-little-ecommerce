import { all, takeLatest, call, put } from 'redux-saga/effects'

import Auth from '../../../services/auth';

import { loginRequest, loginSucess } from './actions';
import { ActionTypes, IUser } from './types'

type RequestLoginActionDataType = ReturnType<typeof loginRequest>;

function* requestLogin(actionData: RequestLoginActionDataType) {
    const { payload } = actionData;
    try {
        const user: IUser = yield call(Auth.login, payload.email, payload.password);
        yield put(loginSucess(user));
        console.log('Login realizado com sucesso!');
    } catch (e) {
        console.log('Error on login', e);
    }
}

export default all([
    takeLatest(ActionTypes.loginRequest, requestLogin)
])