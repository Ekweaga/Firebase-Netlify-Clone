import React from 'react'
import bg from "../login.jpg"

function Account() {
  return (
    <>
    <div className="w-full h-[500px] relative text-white">
        <div className="w-full h-full">
        <div className="w-full h-[500px] bg-black opacity-50 absolute top-0 left-0 object-cover"></div>
            <div className="w-full h-[600px] absolute top-0 left-0 object-cover"></div>
            <img src={bg} className="w-full h-full object-cover" alt={bg}/>
        </div>
     <div className="absolute tex-white top-[60%] left-[10%]"><h1 className="text-3xl md:text-5xl mb-2 font-bold">Your Account</h1>
     <p className="text-[20px]">Saved Movies</p>
     </div>
        </div>

      
    </>
  )
}

export default Account
