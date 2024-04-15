import React, { useContext } from "react"
import { Context } from ".."
import firebase from 'firebase/compat/app'
function Login(){
    const {auth} =  useContext(Context)
    const login = async()=>{
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithpopup(provider)
        console.log(user)
    }
    return(
        <>
        <button>Enter with Google</button>
        </>
        
    )
}
export default Login