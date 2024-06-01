import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth/cordova";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
       const googleProvider = new GoogleAuthProvider()

       const [user, setUser] = useState(null);
       const [loading, setLoading] = useState(true);

       const createUser = (email, password) =>{
              setLoading(true)
              return createUserWithEmailAndPassword(auth, email, password)
       }

       const login = (email, password) =>{
              setLoading(true)
              return signInWithEmailAndPassword(auth, email, password)
       }

       const logOut = () =>{
              setLoading(true)
              return signOut(auth)
       }
        const googleLogin = () =>{
              setLoading(true)
              return signInWithPopup(auth, googleProvider)        }

       useEffect(() => {
              const unSubscribe = onAuthStateChanged(auth, currenUser =>{
                     setUser(currenUser)
                     console.log("this is currentUser", currenUser)
                     setLoading(false)

              })
              return () =>{
                     unSubscribe()
              }
       },[])

       const authInfo = {
         logOut,
         login,
         loading,
         user,
         createUser,
         googleLogin
       };

       return (
              <AuthContext.Provider value={authInfo}>
                     {children}
                     
              </AuthContext.Provider>
       );
};

export default AuthProvider;