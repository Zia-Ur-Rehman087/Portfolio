'use client'
import Image from "next/image";
import bg from '../../../public/background/projects-background.png'
import ProjectsList from "@/components/projects";
import { projectsData } from "../data";
import { Staff } from "@/components/models/staff";
import { Rendermodel } from "@/components/rendermodel";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt="backgroundImage" fill className=" -z-10 w-full h-full object-cover object-center opacity-25" />
      <ProjectsList projects={projectsData} />
      <Rendermodel>
        <Staff />
      </Rendermodel>
    </main>
  );
}