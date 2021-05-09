import { Reducer } from "redux";

import Auth from '../../../services/auth';

import { ActionTypes, IAuthState } from "./types";

const INITIAL_STATE: IAuthState = {
    logged: false,
    user: null
}

const auth: Reducer<IAuthState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.loginSuccess: {
            return {
                logged: true,
                user: action.payload.user
            }
        }
        case ActionTypes.logout: {
            Auth.logout();
            return {
                logged: false,
                user: null
            }
        }
        default: {
            return state;
        }
    }
}

export default auth;