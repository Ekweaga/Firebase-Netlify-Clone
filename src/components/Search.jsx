import React,{useState} from 'react'
import {AiOutlineSearch} from "react-icons/ai"
import {FcStart} from "react-icons/fc"
import axios from 'axios'
import alt from "../login.jpg"

function Search() {
    const [movies,setMovies]= useState([])
    const [text,setText] = useState('')
    const [videourl,setVideourl] = useState('')
    const [show,setshow] = useState(false)

    const search = async (item)=>{
        await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8b202e3aa9ae4600acd6c448e326badd&language=en-US&query=${item}&page=1&include_adult=true`).then((response)=>{
            setMovies(response.data.results)
        })
    }
    const getmovie = (id) =>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=8b202e3aa9ae4600acd6c448e326badd&language=en-US`).then((response)=>{
          console.log(response.data.results[0].key)
          setVideourl(response.data.results[0].key)
          setshow(!show)
        })
      }

  return (
    <>
    <div className='mt-[100px] absolute z-3 md:ml-[500px] border border-red-800 w-[320px] ml-[20px] md:w-[450px] p-3 rounded-full flex items-center justify-between'>
        <input type="text" className="bg-transparent text-white focus:outline-none" placeholder='Search' value={text} onChange={(e)=>setText(e.target.value)}/>
        <AiOutlineSearch className='text-white h-[30px] cursor-pointer' style={{color:'white',height:'30px',width:'25px'}} onClick={()=>search(text)}/>
    </div>


    <div className='text-white grid md:grid-cols-4 grid-cols-1 mt-[200px] absolute gap-4'>



{
  movies.map((movie)=>{
    return (<><div className="flex flex-col items-center justify-content relative">
        <img src={movie?.backdrop_path ? `http://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`: alt} alt={movie?.title}/>
        <div className="absolute w-full h-full top-0 left-0 bg-black/40  flex items-center justify-center flex-col gap-3"></div>
    <div><span>{movie?.title}</span></div>
    
    <span className="absolute top-[30%] left-[40%] cursor-pointer " onClick={()=>getmovie(movie?.id)}><FcStart size = {50}/></span>
    </div></>)
  })}


</div>
{
        show ?( <div className="absolute top-0 bottom-0 flex items-center justify-center w-full h-screen bg-black z-10">
        <iframe src={`http://www.youtube.com/embed/${videourl ? videourl :null}?enablejsapi=1&origin=http://example.com`} frameborder="0" title="video"  className="w-full h-full"></iframe>
        <span className="fixed top-[40px] right-4 cursor-pointer text-3xl z-40 text-white" onClick={()=>setshow(false)}>X</span>
      </div>) :null
      } 
    </>
  )
}

export default Search