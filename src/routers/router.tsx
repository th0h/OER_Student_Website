import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ColorPalettes from '@/pages/Color-Palettes';
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ColorPalettes />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;