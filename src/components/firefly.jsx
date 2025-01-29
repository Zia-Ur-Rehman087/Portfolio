'use client'
import React,{useEffect, useState} from 'react'
const createFirefly = ()=>({
id:Math.random(),
top:`${Math.random() * 100}%`,
left:`${Math.random() * 100}%`,   
animationDuration:`${Math.random() * 5 + 5}s`,   
})
export const Firefly = () => {
  const [fireFly,setFireFly] = useState([])
  useEffect(()=>{
    const addFireFly = () => {
      const newFireFly = createFirefly();
      setFireFly(currfireflies =>
       [...currfireflies.slice(-14),
        newFireFly]
      )
    }
    const interval = setInterval(addFireFly,1000 );
    return () => clearInterval(interval)
  },[])
  return (
    <div className='fixed top-0 left-0 w-full h-full overflow-hidden'>
     {fireFly.map(firefly =>{
        return <div className='absolute rounded-full w-[10px] h-[10px] z-[50] bg-firefly-radial' key={firefly.id} style={{
          top:firefly.top,
          left:firefly.left,
          animation:`move ${firefly.animationDuration} infinite alternate`
        }}></div>
      }
     )}
    </div>
  )
}

