import React,{useEffect,useState} from 'react'
import Rowcast from './Rowcast';
import {requests} from "../url"
import axios from "axios"

function Casts(){

    const [casts,setcats]=useState([])
  
    const movie = casts[Math.floor(Math.random() * casts.length)]
    useEffect(()=>{
setInterval(()=>{
    axios.get(requests.casts1).then((response)=>{
           
        console.log(response.data.results)
        setcats(response.data.results)
    })
},3000)
        

    },[])
    return(
        <>
         <div className="w-full h-[600px] relative text-white">
        <div className="w-full h-full">
            <div className="w-full h-[600px] bg-gradient-to-r from-black absolute top-0 left-0 object-cover"></div>
            <img src={`http://image.tmdb.org/t/p/original/${movie?.profile_path}`} className="w-full h-full object-cover" alt={movie?.profile_path}/>
        </div>

        <div className="absolute lg:top-[30%] top-[30%] p-3">
          
            <div className="mb-3 bg-red-600 p-5 rounded-full w-[30px] h-[30px] flex items-center justify-center ">{Math.floor(movie?.popularity)}</div>
            <h2 className="text-3xl mb-3">{movie?.name}</h2>
           
            <div className="mb-2">Know for : {movie?.known_for_department}</div>
            
         
        </div>
      
    </div>
        <Rowcast title='Casts' id="1" url={requests.casts1}/>
        <Rowcast title='Casts' id="2" url={requests.casts2}/>
        <Rowcast title='Casts' id="3" url={requests.casts3}/>
        <Rowcast title='Casts' id="4" url={requests.casts4}/>
        <Rowcast title='Casts' id="5" url={requests.casts5}/>
        <Rowcast title='Casts' id="6" url={requests.casts6}/>
        <Rowcast title='Casts' id="7" url={requests.casts7}/>
        </>
    )



}


export default Casts;