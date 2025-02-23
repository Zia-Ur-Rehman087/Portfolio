import { HomeBtn } from "@/components/HomeBtn";
export default function SubPagesLayout({ children }) {
  return (
    <main className="flex h-screen py-32  flex-col items-center justify-between relative">
      <HomeBtn />
      {children}
    </main>
  ) 
}
