import React,{useEffect,useState} from 'react'
import axios from 'axios'
//import {AiFillPlayCircle} from 'react-icons/ai'
import {MdChevronLeft} from "react-icons/md"
import {MdChevronRight} from "react-icons/md"
//import { doc, setDoc } from "firebase/firestore"; 
import { getAuth, onAuthStateChanged } from "firebase/auth";
//import {projectfirestore} from "../firebase"
import "./row.css"
import Movies from './Movies'
function Row({title,url,id}) {
    const [movies,setMovies] = useState([])
    //const db=projectfirestore

   const goRight = ()=>{
        const slider = document.getElementById("slider" + id)
        slider.scrollLeft = slider.scrollLeft + 100 
    }
    const goLeft = ()=>{
        const slider = document.getElementById("slider" +id)
        slider.scrollLeft = slider.scrollLeft - 100 
    }

    useEffect(()=>{

        axios.get(url).then((response)=>{
           
            setMovies(response.data.results)
        })

    },[url])
    //const [user,setUser]=useState(null)
    
const auth = getAuth();


useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
  
      //setUser(user)
     
      // ...
    } else {
      // User is signed out
      // ...
      
    }
  });})

  return (
    <div className='text-white'>
     <h2 className="p-3 mx-2">{title}</h2>
     <div className='relative w-full mx-auto flex items-center group'>
     <div> <MdChevronLeft size={40} className='cursor-pointer bg-white text-black rounded-full hidden group-hover:block opacity-40 hover:opacity-80' onClick={goLeft}/> </div>
        <div className="slider overflow-x-scroll whitespace-nowrap  scroll-smooth scrollbar-hide" id={`slider` + id}>
            {
                movies.map((movie)=>{
                    return (
                      <Movies movie={movie} key={movie?.id}/>
                    )
                })
            }
        </div>
        <div> <MdChevronRight size={40} className='cursor-pointer bg-white rounded-full text-black hidden group-hover:block opacity-40 hover:opacity-80' onClick={goRight}/></div>
       

     </div>
   
    </div>

  )
}

export default Row
