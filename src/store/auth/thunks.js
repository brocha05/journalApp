import { checkingCredentials } from "./authSlice";

export const checkingAuthentication = ( email, password) => {
    console.log(email, password)
    return async ( dispatch ) => {
        dispatch(checkingCredentials()); 
    }
}   

export const startGoogleSignIn = ( email, password) => {
    console.log(email, password)
    return async ( dispatch ) => {
        dispatch(checkingCredentials()); 
    }
}   
