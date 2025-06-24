import { ReactNode } from "react"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./app-sidebar"

type PropsTypes = {
    children: ReactNode
}
export default function Layout({ children }: PropsTypes) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className='flex flex-col border-1 w-[100%]'>
        <SidebarTrigger className="bg-[#d10d0d" />
            {children}
      </main>
    </SidebarProvider>
  )
}