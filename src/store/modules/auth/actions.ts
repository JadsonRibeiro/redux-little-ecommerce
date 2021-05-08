import { ActionTypes, IUser } from "./types";

export function login(user: IUser) {
    return {
        type: ActionTypes.login,
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