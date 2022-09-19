import React,{useEffect,useState} from 'react'
import { requests } from '../url'
import axios from 'axios'
import { FcGoogle } from "react-icons/fc";
import {Link,useHistory} from "react-router-dom"
import { auth } from '../firebase';
import {signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword} from 'firebase/auth'
//import {MdDownloading} from "react-icons/md"
import { doc, setDoc } from "firebase/firestore"; 
import {projectfirestore} from "../firebase"

function Signup() {
    const [movies,setMovies]=useState([])
    const provider = new GoogleAuthProvider();
    const history = useHistory();
  //const [loading,setLoading] = useState(false)
    const [error, seterror] = useState(null);
  const [success, setsuccess] = useState(null)
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
 
 

    const movie = movies[Math.floor(Math.random() * movies.length)]

  
        const googleSignup = async()=>{
          await signInWithPopup(auth,provider).then((user)=>{
            history.replace("/")
            console.log(user.user.email)
            const googleemail = user.user.email
           setDoc(doc(projectfirestore,"Movieusers",`${googleemail}`,{
            saveShows:[]
           }))
            
          })
      
        }
    const  signupUser = async (e)=>{
        e.preventDefault();
       // setLoading(true)
    
        if(email === "" || password === ""){
          seterror("Fields are empty")
        
      
          //setLoading(false)
        }
        else if(password.length < 6){
          seterror("Password characters must be greater than 6")
         // setLoading(false)
        }
       else{
        try{
           // setLoading(true)
          await createUserWithEmailAndPassword(auth,email,password).then((response)=>{
            console.log(response.user.refreshToken)
            localStorage.setItem('token', JSON.stringify(response.user.refreshToken))
           
            
          });
          setDoc(doc(projectfirestore,'Movieusers', `${email}`),{
            saveShows:[]
           })
       //  setLoading(false)
         setsuccess("Your Account is created successfully")
            setEmail('')
            setPassword('')
         setTimeout(()=>{
            history.replace("/login")
         },1000)
       }
       catch(err){
       seterror(err.message)
       console.log(err)
      // setLoading(false)
       }
       }
    
    }
        
    useEffect(()=>{
        axios.get(requests.trending).then((response)=>{
            
            setMovies(response.data.results)
            
        })
      

    },[])
  return (
    <div className='w-full h-screen relative'>
        <img src={`http://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} className="w-full h-full object-cover" alt={movie?.title}/>
        <div className=" absolute left-0 bottom-0 bg-black opacity-60 w-full h-screen"></div>

        <div className="absolute top-[20%] left-[8%] md:left-[35%] bg-black h-[500px] w-[350px]  m-auto text-white form">
           
            <div className="flex items-center flex-col justify-center mt-[80px] w-full">
            {error?(<div className='flex items-center justify-center text-red-600 border border-red-600  w-[300px] p-2'><p>{error}</p></div>):null}
                    {success?(<div className=" flex items-center justify-center text-green-600 border border-green-600  w-[300px]"><p>{success}</p></div>):null}
            <h2 className="text-white p-3 text-3xl text-left">Sign Up</h2>
                <form className="flex flex-col gap-4" onSubmit={signupUser}>
                   
                    <div><input type="email" placeholder="Email" className='p-2 w-[300px] rounded focus:outline-none text-black' onChange={(e)=>setEmail(e.target.value)} value={email}/></div>
                    <div><input type="password" placeholder="Password" className='p-2 w-[300px] rounded focus:outline-none text-black' onChange={(e)=>setPassword(e.target.value)} value={password}/></div>
                    
                    <div><button className="bg-red-800 p-2 w-[300px] rounded">Submit</button></div>
                </form>
                <div className="py-2">OR</div>
                <div className="m-3"><button type="submit" className="bg-transparent border p-2 w-[300px] rounded flex items-center justify-center gap-3" onClick={googleSignup}><FcGoogle/> Sign up With Google</button></div>
                <div className='py-2'>Have an account on <span className="text-red-500">Movella</span> <span>?</span> <Link to="login">Login</Link></div>
            </div>

           

        </div>
      
    </div>
  )

}

export default Signup
