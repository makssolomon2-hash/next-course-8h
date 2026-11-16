'use client'

import { useEffect, useState } from "react";

export default function MyInput({placeholders}: {placeholders: string[] }) {  

  const [index, setIndex] = useState(0);

  useEffect(() =>{
    const id = setInterval(() =>{
      setIndex((i) => (i + 1) % placeholders.length);
    }, 4000);

    return () => clearInterval(id);
  },[placeholders])
  

  return (
    
    <div className="w-full max-w-md mx-auto">
      <input
        placeholder={placeholders[index]}
        type='text'
        className="p-3 bg-zinc-800 m-2"
      ></input>
      
      <br></br>

      <button 
        onClick={() => setIndex(index + 1)}
        className="p-3 bg-zinc-800 m-2 rounded-3xl"
        >next place holder
      </button>

      <br></br>

      <button 
        onClick={() => setIndex(index - 1)}
        className="p-3 bg-zinc-800 m-2 rounded-3xl"
      >
        previus place holder
      </button>
    </div>
  )
}
