'use client'
import React from 'react'
import { BtnList } from '@/app/data'
export const Navigation = () => {
  return (
    <div className='flex items-center justify-between relative'>
      {
        BtnList.map((btn,index) => {
            {console.log(btn.label,'from button list');
            }
            return <button key={index} >{btn.label}</button>
            // 43:50
        })
      }
    </div>
  )
}
