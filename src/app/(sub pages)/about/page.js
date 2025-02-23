'use client'
import Image from "next/image";
import bg from '../../../../public/background/about-background.png'
import { Rendermodel } from "@/components/rendermodel";
import HatModel from "@/components/models/Hat";
import { AboutDetails } from "@/components/about";
export default function Home() {

  return (
    <>
      <Image src={bg} alt="backgroundImage" className="fixed -z-50 top-0 left-0 w-full h-full object-cover object-center opacity-25" />

      <div className="w-full h-screen absolute top-0 ">
        <Rendermodel>
          <HatModel />
        </Rendermodel>
      </div>
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          <h1 className="font-bold text-5xl text-accent ">Zia-Ur-Rehman</h1>
          <p className="text-light text-foreground text-lg ">Meet the wizard behind this portfolio</p>
        </div>
      </div>
      <AboutDetails/>
    </>
  );
}