import { LeafyGreen, Fish, Waves, Sun, Dessert} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Centennial College Theme",
    url: "#",
    icon: LeafyGreen,
  },
  {
    title: "Marine Sea Theme",
    url: "#",
    icon: Fish,
  },
  {
    title: "Summer Days Theme",
    url: "#",
    icon: Sun,
  },
  {
    title: "Synthwave Theme",
    url: "#",
    icon: Waves,
  },
  {
    title: "Tiramisu Theme",
    url: "#",
    icon: Dessert,
  },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
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
    </Sidebar>
  )
}
export default AppSidebar