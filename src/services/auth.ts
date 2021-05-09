import firebase from 'firebase'

import firebaseClient from './firebase'

import { IUser } from '../store/modules/auth/types';

const Auth = {
    login: async (email: string, password: string): Promise<IUser | null> => {
        const userCredential: firebase.auth.UserCredential = await firebaseClient.auth().signInWithEmailAndPassword(email, password);
        const user: IUser | null = userCredential.user;

        return user;
    },
    logout: async () => {
        await firebaseClient.auth().signOut();
    }
}

export default Auth;