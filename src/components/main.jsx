import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { requests } from '../url'
import {BsPlay} from "react-icons/bs"


function Main() {

    const [movies,setMovies]=useState([])
    const [videos,setVideos] = useState([])
    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(()=>{
        axios.get(requests.trending).then((response)=>{
            
            setMovies(response.data.results)
            
        })
      

    },[])
console.log(movies)
  
  return (
    <div className="w-full h-[600px] relative text-white">
        <div className="w-full h-full">
            <div className="w-full h-[600px] bg-gradient-to-r from-black absolute top-0 left-0 object-cover"></div>
            <img src={`http://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} className="w-full h-full object-cover" alt={movie?.title}/>
        </div>

        <div className="absolute lg:top-[30%] top-[30%] p-3">
          
            <div className="mb-3 bg-red-600 p-5 rounded-full w-[30px] h-[30px] flex items-center justify-center ">{movie?.vote_average}</div>
            <h2 className="text-3xl mb-3">{movie?.title}</h2>
            <div className="mb-10">

                <button className="bg-white text-black border  mr-2 p-2 w-[150px] ">Play</button>
                <button className="bg-transparent border p-2 w-[150px]">Watch later</button>
            </div>
            <div className="mb-2">Released date : {movie?.release_date}</div>
            <div><p>{movie?.overview.substring(0,150)}...</p></div>
         
        </div>
      
    </div>
  )
}

export default Main
