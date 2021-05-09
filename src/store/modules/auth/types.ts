import firebase from 'firebase'

export enum ActionTypes {
    loginRequest = 'LOGIN_REQUEST',
    loginSuccess = 'LOGIN_SUCCESS',
    loginFailure = 'LOGIN_FAILURE',
    logout = 'LOGOUT'
}

export interface IAuthState {
    logged: boolean;
    user?: IUser | null
}

export interface IUser extends firebase.User {} 