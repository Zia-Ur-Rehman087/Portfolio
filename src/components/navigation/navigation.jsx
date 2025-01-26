'use client'
import React from 'react'
import { BtnList } from '@/app/data'
import { NavButton } from './NavButton'
export const Navigation = () => {
    const btnAngleIncrement  = (360/BtnList.length)
    
  return (
 <div className="fixed h-screen z-50 flex items-center justify-center w-full">
       <div className='w-max flex items-center justify-center relative hover:pause animate-spin-slow group'>
      {
        BtnList.map((btn,index) => {
            // angle to radian
            const angleRad =   (index*btnAngleIncrement*Math.PI)/180 ;
            const radius = 'calc(20vw - 1rem)';
            const x = `calc(${radius}*${Math.cos(angleRad)})`;
            const y = `calc(${radius}*${Math.sin(angleRad)})`;          
            return <NavButton key={btn.label} x={x} y={y} {...btn}/>           
        })
      }
    </div>
 </div>
  )
}