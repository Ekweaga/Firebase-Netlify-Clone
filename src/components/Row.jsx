import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {AiFillPlayCircle} from 'react-icons/ai'
function Row({title,url}) {
    const [movies,setMovies] = useState([])

    useEffect(()=>{

        axios.get(url).then((response)=>{
           
            setMovies(response.data.results)
        })

    },[url])
  return (
    <div className='text-white'>
     <h2 className="p-3 mx-2">{title}</h2>
     <div className='relative w-full mx-auto flex items-center'>
        <div className="slider overflow-x-scroll whitespace-nowrap  scroll-smooth scrollbar-hide">
            {
                movies.map((movie)=>{
                    return (
                        <div className="w-[160px] h-[160px] m-3 inline-block relative p-2 lg:w-[280px] md:h-[160px] cursor-pointer">
                           
                             <img src={`http://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt={movie?.title} className="w-full h-full block"/>
                             <div className="absolute w-full h-full top-0 left-0 bg-black/80 opacity-0 hover:opacity-100 hover:bg-black flex items-center justify-center flex-col gap-3">
                                <p className='flex items-center justify-center'>{movie?.title}</p>
                                <AiFillPlayCircle/>
                             </div>
                            </div>
                    )
                })
            }
        </div>

     </div>
   
    </div>

  )
}

export default Row
