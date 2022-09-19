import React,{useState,useContext} from 'react'
import alt from "../login.jpg"
import {AiOutlinePlus} from "react-icons/ai"
import { doc,updateDoc,arrayUnion } from "firebase/firestore"; 
import {projectfirestore} from "../firebase"
import {AuthContext} from "../Context"
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';


function Movies({movie}) {


const [red,setRed] = useState(false)

const {user} = useContext(AuthContext)


  const addmovie = async ()=>{
    if(user){
      await updateDoc(doc(projectfirestore,"Movieusers",`${user?.email}`),{
        saveShows:arrayUnion({
            id:movie?.id,
            title:movie?.title,
            img:movie?.backdrop_path
        })
      }).then(()=>{
        setRed(true)
        alertify.success("Movie added to yourPlaylists")
      })
    }

    else{
      alertify.error("You don't have an account, Sign Up now");
    }
     
     
  }
  return (
    <>
        <div className="w-[160px] h-[160px] m-3 inline-block relative p-2 lg:w-[280px] md:h-[160px] cursor-pointer">
                           
                           <img src={movie?.backdrop_path? `http://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`: alt} alt={movie?.title} className="w-full h-full block"/>
                           <div className="absolute w-full h-full top-0 left-0 bg-black/80 opacity-0 hover:opacity-100 hover:bg-black flex items-center justify-center flex-col gap-3">
                              <p className='flex items-center justify-center'>{movie?.title}</p>
                             
                           </div>
                           <div className="absolute top-4 left-4 " style={{color:`${red ? red :null}`}}><AiOutlinePlus onClick={addmovie}/></div>
                          </div>
    </>
  )
}

export default Movies
