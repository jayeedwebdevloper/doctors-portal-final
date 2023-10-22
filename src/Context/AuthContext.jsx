/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase.init';


export const AuthProvider = createContext();
const auth = getAuth(app);

const AuthContext = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const google = new GoogleAuthProvider();
    const [user, setUser] = useState();
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (userInfo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, userInfo)
    }
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const googleSign = () => {
        setLoading(true)
        return signInWithPopup(auth, google)
    }



    useEffect(() => {
        const checkUser = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });
        return checkUser
    }, [])

    const contextData = { createUser, updateUser, login, user, logOut, googleSign, loading }
    return (
        <AuthProvider.Provider value={contextData}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;