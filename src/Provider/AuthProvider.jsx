import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../FireBase/FireBase.init';
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
     // State to hold the current authenticated user
    const [user, setUser] = useState(null)
    console.log(user);

    // function to create user
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
        
    }
    // function to logIn with the help of google account
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }


    // update user profile
    const updatePfp = (updateUserProfile) =>{
        return updateProfile(auth.currentUser, updateUserProfile);
    } 

    // function to sign in user
    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    } 

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        })
        return ()=>{
            unsubscribe();
        }
    }, [])

    // function to log out user
    const signOutUser = ()=>{
        return signOut(auth);
    }

    const authInfo = {
        createUser,
        signOutUser,
        updatePfp,
        logIn,
        signInWithGoogle,
        setUser,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;