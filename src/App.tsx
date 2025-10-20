// src/App.tsx
import { Routes, Route } from "react-router-dom";
import EnterPage from "./pages/EnterPage";
import LandingPage from "./pages/LandingPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<EnterPage />} /> 
      <Route path="/landing" element={<LandingPage />} /> 
    </Routes>
  );
}

export default App;