import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateEmail, updatePassword, updateProfile} from "firebase/auth";
import axios from 'axios';

const auth = getAuth(app);
export const UserAuth = createContext(null);

const Auth = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleIn =()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const facebookIn =()=>{
        setLoading(true);
        return signInWithPopup(auth, facebookProvider);
    }

    const passReset = (email) =>{
        return sendPasswordResetEmail(auth,email);
    }

    const updateUser = (loggedUser, name, photo) => {
        setLoading(true)
        return updateProfile(loggedUser, {
            displayName: name, photoURL: photo
        })
    }

    const updateUserName = (name) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: auth.currentUser.photoURL
        })
    }


    const updatePass = (newPassword) =>{
        setLoading(true);
        return updatePassword(auth.currentUser , newPassword);
    }

    const updateUserEmail = (newEmail) =>{
        setLoading(true);
        return updateEmail(auth.currentUser, newEmail)
    }

    const userVerify = ()=>{
        setLoading(true);
        return sendEmailVerification(auth.currentUser)
    }

    const logOut = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)

            if (currentUser) {
                // const email= currentUser.email;
                axios.post("http://localhost:5000/jwt", {
                    email: currentUser.email
                }).then(data => {
                    // console.log(data.data.token);
                    localStorage.setItem("access-token", data.data.token)
                    setLoading(false)
                })
            } else {
                setLoading(false)
                localStorage.removeItem("access-token")
            }
        })
        return () => unsubscribe();
    }, [])




    const userInfo = {
        user,
        loading,
        signUp,
        signIn,
        passReset,
        googleIn,
        facebookIn,
        updateUser,
        updatePass,
        updateUserName,
        updateUserEmail,
        userVerify,
        logOut
    }
    return (
       <UserAuth.Provider value={userInfo}>
          {children}
       </UserAuth.Provider>
    );
};

export default Auth;