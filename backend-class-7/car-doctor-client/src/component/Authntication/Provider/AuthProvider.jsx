import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.Config";

export const AuthContext = createContext(null)
const AuthProvider = ({ children}) => {

       const [user, setUser] = useState(null)
       const [loading, setLoading] = useState(true)

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


       const authInfo = {
              createUser,
              user,
              loading,
              login,
              logOut
       }

       useEffect(() =>{
              const unsubscrrive = onAuthStateChanged(auth, currentUser =>{
                     setUser(currentUser)
                     console.log("this is user", currentUser)
                     setLoading(false)
              })
              return () =>{
                     unsubscrrive()
              }
       },[])



       return (
              <AuthContext.Provider value={authInfo}>
                     {children}
                     
              </AuthContext.Provider>
       );
};

export default AuthProvider;