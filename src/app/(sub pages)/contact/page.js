import React from 'react'
import bg from '../../../../public/background/contact-background.png'
import Image from 'next/image'
import Form from '@/components/contact/form'
 const page = () => {
  return (
    <>
     <Image src={bg} alt="backgroundImage" className="fixed -z-50 top-0 left-0 w-full h-full object-cover object-center opacity-25" />
    <article className='relative w-full flex flex-col items-center justify-center space-y-8'>
<div className='flex flex-col items-center justify-center space-y-6 w-3/4'>
<h1 className='text-accent font-semibold text-center text-4xl capitalize'>Summon the wizard</h1>
<p className='font-light text-base'>lets get started🤛</p>
</div>
    <Form/>
    </article>
    </>
  )
}
export default page