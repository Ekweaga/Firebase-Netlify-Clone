import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { requests } from '../url'

function Main() {

    const [movies,setMovies]=useState([])
    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(()=>{
        axios.get(requests.trending).then((response)=>{
            
            setMovies(response.data.results)
        })

    },[])

    console.log(movie)
  return (
    <div className="w-full h-[550px] relative text-white">
        <div className="w-full h-full">
            <div className="w-full h-[550px] bg-gradient-to-r from-black absolute top-0 left-0 object-cover"></div>
            <img src={`http://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} className="w-full h-full object-cover" alt={movie?.title}/>
        </div>

        <div className="absolute top-[30%] p-3">
            <div className="mb-10">
                <button className="bg-white text-black border  mr-2 p-2 w-[150px]">Play</button>
                <button className="bg-transparent border p-2 w-[150px]">Watch later</button>
            </div>
            <div><p>{movie?.overview}</p></div>
        </div>
      
    </div>
  )
}

export default Main
