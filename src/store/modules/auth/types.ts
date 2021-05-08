export enum ActionTypes {
    login = 'LOGIN',
    logout = 'LOGOUT'
}

export interface IAuthState {
    logged: boolean;
    user?: IUser
}

export interface IUser {
    name: string;
    email: string;
}