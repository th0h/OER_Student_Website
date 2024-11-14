import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSideBar from "@/components/app-sidebar";
const ColorPalettes = () => {
  return <div>
    <SidebarProvider>
        <AppSideBar />
        <SidebarTrigger />
    </SidebarProvider>
    
  </div>
};

export default ColorPalettes;