import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";



type signInData = {
    email: string,
    password: string
}

export async function signInRequest(data: signInData) {
    signInWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
        const userData = userCredential.user;
        const token = userData.getIdToken();
        const user = {
                uid: userData.uid,
                email: userData.email,
                displayName: userData.displayName,
                photoURL: userData.photoURL,
        }
        return user
            
            
        
        
    })
    .catch((error) => {
        const user = null;
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    
}

