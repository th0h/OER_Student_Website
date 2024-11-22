import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ColorPalettes from '@/pages/Color-Palettes';
import Documentation from "../Documentation";
export const router = createBrowserRouter(
  [{
      path: "/",
      element: <App/>,
      children: [
          {path: "", element:<ColorPalettes />},
      ]
  },
  {
    path: "/documentation",
    element: <Documentation/>,
    children: [
      {path: "", element:<ColorPalettes />},
  ]

  }

]
)