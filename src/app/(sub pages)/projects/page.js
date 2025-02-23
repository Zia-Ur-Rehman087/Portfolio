'use client'
import Image from "next/image";
import bg from '../../../../public/background/projects-background.png'
import ProjectsList from "@/components/projects";
import { projectsData } from "../../data";
import Staff from "@/components/models/staff";
import { Rendermodel } from "@/components/rendermodel";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt="backgroundImage" className="fixed -z-50 top-0 left-0 w-full h-full object-cover object-center opacity-25" />
      <ProjectsList projects={projectsData} />
      <div className="flex items-center justify-start absolute top-20 -left-24 h-screen ">
      <Rendermodel>
        <Staff />
      </Rendermodel>
      </div>
    </main>
  );
}