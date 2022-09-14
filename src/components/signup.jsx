import React,{useEffect,useState} from 'react'
import { requests } from '../url'
import axios from 'axios'
import { FcGoogle } from "react-icons/fc";
import {Link} from "react-router-dom"

function Signup() {
    const [movies,setMovies]=useState([])
  
    const movie = movies[Math.floor(Math.random() * movies.length)]
        
    useEffect(()=>{
        axios.get(requests.trending).then((response)=>{
            
            setMovies(response.data.results)
            
        })
      

    },[])
  return (
    <div className='w-full h-screen relative'>
        <img src={`http://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} className="w-full h-full object-cover" alt={movie?.title}/>
        <div className=" absolute left-0 bottom-0 bg-black opacity-60 w-full h-screen"></div>

        <div className="absolute top-[20%] left-[8%] md:left-[35%] bg-black h-[500px] w-[350px]  m-auto text-white">
           
            <div className="flex items-center flex-col justify-center mt-[80px] w-full">
            <h2 className="text-white p-3 text-3xl text-left">Sign Up</h2>
                <form className="flex flex-col gap-4">
                    <div className="w-full"><input type="email" placeholder="Email" className='p-2 w-[300px] rounded focus:outline-none text-black'/></div>
                    <div><input type="email" placeholder="Email" className='p-2 w-[300px] rounded focus:outline-none text-black' /></div>
                    <div><input type="email" placeholder="Email" className='p-2 w-[300px] rounded focus:outline-none text-black' /></div>
                    <div><button className="bg-red-800 p-2 w-[300px] rounded">Submit</button></div>
                </form>
                <div className="py-2">OR</div>
                <div className="m-3"><button className="bg-transparent border p-2 w-[300px] rounded flex items-center justify-center gap-3"><FcGoogle/> Sign up With Google</button></div>
                <div className='py-2'>Have an account on <span className="text-red-500">Movella</span> <span>?</span> <Link to="login">Login</Link></div>
            </div>

           

        </div>
      
    </div>
  )
}

export default Signup
