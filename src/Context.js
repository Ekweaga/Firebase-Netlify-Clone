import { createContext,useState,useEffect } from "react";
import { onAuthStateChanged ,getAuth} from "firebase/auth";

export const AuthContext = createContext()


export const AuthContextProvider  = ({children}) =>{
    const [user,setUser] = useState({})
const auth = getAuth()

    useEffect(()=>{
     onAuthStateChanged(auth,(user)=>{
            setUser(user)
            
        })
    },[auth])

    return (
        <AuthContext.Provider value={{user}}>
        {children}
    </AuthContext.Provider>
    )
}



