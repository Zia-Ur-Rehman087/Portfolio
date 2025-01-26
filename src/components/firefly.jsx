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
    const addFireFly = ()=>{
      const fireflies  = createFirefly();
      setFireFly([fireflies ])
    }
    const interval = setInterval(addFireFly,10000);
    return clearInterval(interval)
  },[])
  return (
    <div className='fixed top-0 left-0 w-full h-full overflow-hidden'>
     { fireFly.map(
      (firefly)=>{
        return <div className='absolute rounded-full bg-green-600 w-[60px] h-[60px] z-[50]' key={firefly.id} style={{
          top:firefly.top,
          left:firefly.left,
          animation:`move ${firefly.animationDuration} infinite alternate`
        }}></div>
      }
     )}
    </div>
  )
}


// 'use client';
// import React, { useEffect, useState } from 'react';

// const createFirefly = () => ({
//   id: Math.random(),
//   top: `${Math.random() * 100}%`,
//   left: `${Math.random() * 100}%`,
//   animationDuration: `${Math.random() * 5 + 5}s`,
// });

// export const Firefly = () => {
//   const [fireflies, setFireflies] = useState([]);

//   useEffect(() => {
//     const addFirefly = () => {
//       const newFirefly = createFirefly();
//       setFireflies((prev) => [...prev, newFirefly]);
//     };

//     const interval = setInterval(addFirefly, 10000);

//     return () => clearInterval(interval); // Cleanup interval correctly
//   }, []);

//   return (
//     <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[10]">
//       {fireflies.map((firefly) => (
//         <div
//           className="absolute rounded-full bg-green-600 w-[60px] h-[60px]"
//           key={firefly.id}
//           style={{
//             top: firefly.top,
//             left: firefly.left,
//             animation: `move ${firefly.animationDuration} infinite alternate`,
//           }}
//         ></div>
//       ))}
//     </div>
//   );
// };

