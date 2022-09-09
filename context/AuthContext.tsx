
import React, {  createContext, useContext, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie} from 'nookies';
import Router from 'next/router';
import { auth } from "../services/firebase";

import { onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { FirebaseError } from "firebase/app";


type AuthContextType = {
    isAuthenticated: boolean;
    user: User | null;
    signIn: (data: signInData) => Promise<void>;
    signOut:() => Promise<void>;
}

type Props = {
    children?: React.ReactNode
  };


type signInData = {
    email: string,
    password: string
}

type User = {
    
    email: string | null,
    uid: string | null,
}





export const AuthContext = createContext({} as AuthContextType);




export function AuthProvider({ children }: Props) {
   

    const [user, setUser] = useState<User | null>(null)

    const isAuthenticated = !!user;

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
              
            }
          });
        return unsubscribe;
    })
    



    async function signIn(data: signInData) {
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then(async (userCredential) => {
            const userData = userCredential.user;
            const token = await userData.getIdToken();
            const user = {
                    uid: userData.uid,
                    email: userData.email,
                    name: userData.displayName,
                    photoURL: userData.photoURL,
            }
            setCookie(undefined, 'lumecode.token', token, {
                maxAge: 60 * 60 * 24, // 24 hours
                

            })
            setUser(user)
        })
        .catch((error) => {
            
            
            const errorMessage = error.message;
            console.log(errorMessage);
          });
        
    }

    async function signOut() {
        
        return auth.signOut()
          
    }


    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut}}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider