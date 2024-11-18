import { Outlet } from "react-router";
import SideHeader from "./components/navbar/SiteHeader";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
    <SideHeader />
    <Outlet/>
    </div>
  )
}

export default App
