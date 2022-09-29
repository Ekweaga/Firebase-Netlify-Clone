import React,{useContext,useState} from 'react'
import {Link} from "react-router-dom"
import {  signOut } from "firebase/auth";
import {auth} from "../firebase"
import {useHistory} from "react-router-dom"
import {AuthContext} from "../Context"
import {AiOutlineSearch} from "react-icons/ai"
import closeBar from "./icon-close.svg"
import openBar from "./icon-hamburger.svg"

function Navbar() {

  const {user} = useContext(AuthContext)
const history = useHistory()
const [open,setOpen] = useState(false)

 const logout = async ()=>{
    await signOut(auth)
    history.replace("/login")
    localStorage.clear();
}
  return (
    <div className="w-full absolute z-[50] flex items-center justify-between py-4">
        <div><h1 className="text-red-600 px-2" ><Link to="">MOVELLA</Link></h1></div>
       {
        user ? ( <div  className='md:flex gap-2 px-4 items-center justify-around text-white hidden '>

      <li style={{listStyle:'none'}}><Link to="casts">Casts</Link></li>
      <li  style={{listStyle:'none'}}><Link to="tvshows">Tv Shows</Link></li>
      <li  style={{listStyle:'none'}}>Networks</li>
        <button className="text-white"><Link to="account">Account </Link> </button>
        <button className="bg-red-900 text-white p-1 rounded" onClick={logout}>Logout</button>
        <AiOutlineSearch className='text-white h-[30px] cursor-pointer' style={{color:'white',height:'30px',width:'25px'}} onClick={()=>history.replace("/search")}/>
      </div>) :( <div  className='md:flex gap-2 px-2 hidden'>
         
         <button className="text-white"><Link to="login">Sign in </Link> </button>
         <button className="bg-red-900 text-white p-1 rounded"><Link to="signup">Sign up</Link></button>
       </div>)
       }
         <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? "text-gray-900" : "text-gray-100"
          } text-3xl md:hidden px-4 `}
        >
          <img src={open ? closeBar : openBar} alt="navBar"/>
        </div>
        <div  className={`md:hidden text-white  absolute w-2/3 h-screen z-50
      px-7 py-2 font-medium  top-0 duration-300 ${
        open ? "right-0 block" : "hidden"
      }`} style={{background:'red'}}>

{
        user ? ( <div  className='flex flex-col gap-[25px] px-4 items-center justify-around text-white mt-[100px] z-50   '>

      <li style={{listStyle:'none'}}   onClick={() => setOpen(!open)}><Link to="casts">Casts</Link></li>
      <li  style={{listStyle:'none'}}   onClick={() => setOpen(!open)}>Tv Shows</li>
      <li  style={{listStyle:'none'}}   onClick={() => setOpen(!open)}>Networks</li>
        <button className="text-white" onClick={() => setOpen(!open)}><Link to="account">Account </Link> </button>
        <button className="bg-red-900 text-white p-1 rounded w-[200px]" onClick={logout}>Logout</button>
        <AiOutlineSearch className='text-white h-[30px] cursor-pointer' style={{color:'white',height:'30px',width:'25px'}} onClick={()=>history.replace("/search")}/>
      </div>) :( <div  className='flex flex-col gap-[20px] px-2 mt-[100px]'>
         
         <button className="text-white" onClick={() => setOpen(!open)}><Link to="login">Sign in </Link> </button>
         <button className="bg-red-900 text-white p-1 rounded" onClick={() => setOpen(!open)}><Link to="signup">Sign up</Link></button>
       </div>)
       }

      </div>
      
    </div>
  )
}

export default Navbar
