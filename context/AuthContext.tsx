import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { auth } from '../firebase/clientApp';

// Inside AuthProvider
const provider = new GoogleAuthProvider();

const login = () => {

}

const logout = () => {
    auth.signOut();
    console.log("logout");
};
