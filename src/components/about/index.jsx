import clsx from 'clsx'
import React from 'react'
const ItemLayout  = ({children,className})=>{
    return (
        <div className={clsx(`custom-bg p-8 rounded-xl items-center justify-center space-y-8`,className)}>
            {children}
        </div>
    )
}
export const AboutDetails = () => {
  return (
    <section className='py-20 w-full px-10'>
        <div className="grid grid-cols-12 gap-8 w-full">
        <ItemLayout className={`col-span-8 row-sapn-2 flex-col items-start`}>
            <h2 className='text-2xl text-left w-full capitalize'>Archittect of Enchatment</h2>
            <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsam voluptatem veniam distinctio accusantium, incidunt itaque temporibus doloribus commodi pariatur.</p>
        </ItemLayout>
        <ItemLayout className={`col-span-4 row-sapn-2 text-accent`}>
            <p className='font-semibold w-full text-left text-5xl'>25+ <sub className='font-semibold text-base'>clients</sub></p>
        </ItemLayout>
        <ItemLayout className={`col-span-4 row-sapn-2 text-accent`}>
            <p className='font-semibold w-full text-left text-5xl'>24+  <sub className='font-semibold text-base'>years of experience</sub></p>
        </ItemLayout>
        </div>
    </section>
  )
}
