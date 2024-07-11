

import {   GoogleAuthProvider,  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile  } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';  
import auth from "../firebase/firebase.config";



export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider()



const AuthProvider = ({children}) => {
    const [user ,setUser] =useState(null);
    const [loading , setLoading] =useState(true);
    
    const createUser = (email , password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email ,password)
    }

    // update user profile
    const updateUserProfile=(name ,image) =>{
        return updateProfile(auth.currentUser,{
             displayName:name,
             photoURL:image
         })
       }



    const signInUser =(email , password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth ,email ,password)
    }

    
        const signInWithGoogle =() =>{
            setLoading(true);
            return signInWithPopup(auth ,googleProvider);
      }
      
     
     

    
    
    const logOut =(email , password) =>{
        setLoading(true)
        return signOut(auth)
    }

     useEffect(() =>{
     const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
         console.log('observing current user inside useeffect', currentUser)
         setUser (currentUser);
         setLoading(false);
        });
        return () =>{
            unSubscribe();
        }
     
    },[])
    const authInfo ={
        user ,
        loading ,
       
            
        createUser ,
        signInUser,
        signInWithGoogle, 
       
       
       
        logOut,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

 AuthProvider.propTypes ={
    children:PropTypes.node
 }


