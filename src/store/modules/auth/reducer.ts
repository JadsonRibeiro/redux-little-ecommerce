import { Reducer } from "redux";
import { ActionTypes, IAuthState } from "./types";

const INITIAL_STATE: IAuthState = {
    logged: false
}

const auth: Reducer<IAuthState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.login: {
            return {
                logged: true,
                user: action.payload
            }
        }
        case ActionTypes.logout: {
            return {
                logged: false
            }
        }
        default: {
            return state;
        }
    }
}

export default auth;