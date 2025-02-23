import clsx from 'clsx'
import React from 'react'
const ItemLayout  = ({children,className})=>{
    return (
        <div className={clsx(`custom-bg p-8 rounded-xl items-center justify-center`,className)}>
            {children}
        </div>
    )
}
export const AboutDetails = () => {
  return (
    <section className='py-20 w-full px-10'>
        <div className="grid grid-cols-12 gap-8 w-full">
        <ItemLayout className={`col-span-6 row-span-2 flex-col items-start`}>
            <h2 className='text-2xl text-left w-full capitalize'>Archittect of Enchatment</h2>
            <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsam voluptatem veniam distinctio accusantium, incidunt itaque temporibus doloribus commodi pariatur.</p>
        </ItemLayout>
        <ItemLayout className={`col-span-3 text-accent row-span-2`}>
            <p className='font-semibold w-full text-left text-5xl'>25+ <sub className='font-semibold text-base'>clients</sub></p>
        </ItemLayout>
        <ItemLayout className={`col-span-3 text-accent row-span-2`}>
            <p className='font-semibold w-full text-left text-5xl'>24+  <sub className='font-semibold text-base'>years of experience</sub></p>
        </ItemLayout>
        <ItemLayout className={`col-span-8 row-span-2 !p-0` }>
<img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api?username=Zia-Ur-Rehman087&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"alt="Zia-Ur-Rehman" loading='lazy' />
        </ItemLayout>
        <ItemLayout className={`col-span-4 row-span-2 !p-0` }>
<img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api/top-langs/?username=Zia-Ur-Rehman087&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"alt="Zia-Ur-Rehman" loading='lazy' />
        </ItemLayout>
        <ItemLayout className={`col-span-8 row-span-2 !p-0` }>
<img className='w-full h-auto' src="https://skillicons.dev/icons?i=js,html,css,wasm"alt="Zia-Ur-Rehman" loading='lazy' />
        </ItemLayout>
        <ItemLayout className={`col-span-8 row-span-2 !p-0` }>
<img className='w-full h-auto !p-0' src="https://streak-stats.demolab.com?user=Zia-Ur-Rehman087&theme=travelers-theme"alt="Zia-Ur-Rehman" loading='lazy' />
        </ItemLayout>
        </div>
    </section>
  )
}
