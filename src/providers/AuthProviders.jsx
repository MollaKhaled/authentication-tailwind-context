import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();


const AuthProviders = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
  }
  const signInWithGoogle = ()=>{
    return signInWithPopup(auth, googleAuthProvider)
  }
  const logOut =() =>{
    return signOut(auth)
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      console.log("Auth state change", currentUser);
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    }
  },[])

 const authInfo = { 
  user, 
  createUser,
  signIn,
  logOut,
  loading,
  signInWithGoogle

 
 }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;

