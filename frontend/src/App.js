import Home from "./pages/Home";
import CropPredictor from "./pages/CropPredictor";
import FertilizerPredictor from "./pages/FertilizerPredictor";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Box from '@mui/material/Box';


function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/crop-predictor" element={<CropPredictor />} />
          <Route exact path="/fertilizer-predictor" element={<FertilizerPredictor />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
