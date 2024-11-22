import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ColorPalettes from '@/pages/Color-Palettes';
export const router = createBrowserRouter(
  [{
      path: "/",
      element: <App/>,
      children: [
          {path: "", element:<ColorPalettes />},
      ]
  }]
)