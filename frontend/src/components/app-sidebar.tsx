import { Calendar, Home, Inbox, Search, Settings, ChevronsUpDown } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "./ui/button"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { LOGOUT_USER } from "@/service/user.service"
import { useLazyQuery } from "@apollo/client"
import { useNavigate } from "react-router"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "Editor",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  const {name, email, picture} = JSON.parse(localStorage.getItem("Payload") as unknown as string);
  const navigate = useNavigate();

    const [logoutUser] = useLazyQuery(LOGOUT_USER, {
  fetchPolicy: 'no-cache',
  onCompleted: () => {
    navigate('/');
  },
  onError: (err) => {
    console.error('Erro ao fazer logout:', err.message);
  }
});
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Popover>
            <Separator className="bg-[#00000018]" />
            <PopoverTrigger className=" p-[5px] flex items-center justify-between gap-2  rounded-xl hover:bg-[#00000011] ">
                    <div className="flex gap-2 items-center truncate">
                        <Avatar>
                        <AvatarImage src={picture}/>
                        </Avatar>
                        <div className="flex flex-col items-start w-[100%] overflow-hidden text-ellipsis">
                            <h4 className="text-sm leading-none font-medium">{name}</h4>
                            <p className="text-muted-foreground text-[11px] truncate w-full ">{email}</p>
                        </div>
                    </div>
                    <ChevronsUpDown/>
            </PopoverTrigger>
            <PopoverContent sideOffset={-25} align="start" alignOffset={240} className="bg-[#f7f7f7] rounded-xl border-1 border-[#dadada]">
                <Button onClick={(e) => {
                    e.preventDefault();
                    logoutUser();
                }}>Sair</Button>
            </PopoverContent>
        </Popover>
      </SidebarFooter>
    </Sidebar>
  )
}