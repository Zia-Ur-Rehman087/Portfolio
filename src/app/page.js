'use client'
import Image from "next/image";
import bg from '../../public/background/home-background.png'
import { Rendermodel } from "@/components/rendermodel";
import { Navigation } from "@/components/navigation/navigation";
import Wizard from "@/components/models/wizard";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
     <Image src={bg} alt="backgroundImage" fill className=" -z-10 w-full h-full object-cover object-center opacity-25"/>
     <div className="w-full h-screen">
      {/* navigation and 3d modal */}
      <Navigation/>
      {/* <Scene/> */}
    <Rendermodel>
    <Wizard/>
    </Rendermodel>
     </div>
    </main>
  );
}