import { ActionTypes, IUser } from "./types";

export function loginRequest(email: string, password: string) {
    return {
        type: ActionTypes.loginRequest,
        payload: {
            email, password
        }
    }
}

export function loginSucess(user: IUser) {
    return {
        type: ActionTypes.loginSuccess,
        payload: {
            user
        }
    }
}

export function logout() {
    return {
        type: ActionTypes.logout
    }
}