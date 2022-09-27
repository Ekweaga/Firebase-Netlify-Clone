import React, {useEffect,useState} from 'react'
import axios from 'axios'
import {MdChevronLeft} from "react-icons/md"
import {MdChevronRight} from "react-icons/md"
import Cast from './Cast'


function Rowcast({url,title,id}) {
    const [movies,setMovies] = useState([])
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
  
  return (
    <>
     <div className='text-white'>
     <h2 className="p-3 mx-2">{title}</h2>
     <div className='relative w-full mx-auto flex items-center group'>
     <div> <MdChevronLeft size={40} className='cursor-pointer bg-white text-black rounded-full hidden group-hover:block opacity-40 hover:opacity-80' onClick={goLeft}/> </div>
        <div className="slider overflow-x-scroll whitespace-nowrap  scroll-smooth scrollbar-hide" id={`slider` + id}>
            {
                movies.map((movie)=>{
                    return (
                      <Cast movie={movie} key={movie?.id}/>
                    )
                })
            }
        </div>
        <div> <MdChevronRight size={40} className='cursor-pointer bg-white rounded-full text-black hidden group-hover:block opacity-40 hover:opacity-80' onClick={goRight}/></div>
       

     </div>
   
    </div>
    </>
  )
}

export default Rowcast