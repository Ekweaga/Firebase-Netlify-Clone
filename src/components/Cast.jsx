import React from 'react'
import alt from "../login.jpg"

function Cast({movie}) {
  return (
    <div className="w-[160px] h-[160px] m-3 inline-block relative p-2 lg:w-[280px] md:h-[160px] cursor-pointer">
                           
                           <img src={movie?.profile_path? `http://image.tmdb.org/t/p/w500/${movie?.profile_path}`: alt} alt={movie?.profile_path} className="w-full h-full block"/>
                           <div><span>{movie?.name}</span></div>
                         
                          
                          </div>
  )
}

export default Cast