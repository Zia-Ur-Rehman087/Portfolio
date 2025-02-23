import React from 'react'
import Link from 'next/link'
import { Home } from 'lucide-react'
export const HomeBtn = () => {
  return (
    <Link href='/' target={'self'} className='text-foreground rounded-full flex items-center justify-center custom-bg 
    fixed top-4 left-4 w-fit self-start' aria-label="Home" name="Home">
    <span className='relative w-14 h-14 p-4'>
        <Home className='w-full h-auto' strokeWidth={1.5}/>
    <div className="peer absolute bg-transparent top-0 left-0 w-full h-full"></div>
    <span className='absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap'>Home</span>
    </span>
    </Link>
  )
}
