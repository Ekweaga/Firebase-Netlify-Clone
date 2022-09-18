import React,{useContext} from 'react'
import {Link} from "react-router-dom"
import {  signOut } from "firebase/auth";
import {auth} from "../firebase"
import {useHistory} from "react-router-dom"
import {AuthContext} from "../Context"

function Navbar() {

  const {user} = useContext(AuthContext)
const history = useHistory()

 const logout = async ()=>{
    await signOut(auth)
    history.replace("/login")
    localStorage.clear();
}
  return (
    <div className="w-full absolute z-[50] flex items-center justify-between py-4">
        <div><h1 className="text-red-600 px-2" ><Link to="">MOVELLA</Link></h1></div>
       {
        user ? ( <div  className='flex gap-2 px-2'>
         
        <button className="text-white"><Link to="account">Account </Link> </button>
        <button className="bg-red-900 text-white p-1 rounded" onClick={logout}>Logout</button>
      </div>) :( <div  className='flex gap-2 px-2'>
         
         <button className="text-white"><Link to="login">Sign in </Link> </button>
         <button className="bg-red-900 text-white p-1 rounded"><Link to="signup">Sign up</Link></button>
       </div>)
       }
        
      
    </div>
  )
}

export default Navbar
