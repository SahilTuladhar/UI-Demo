import SignCover from "./components/Sign/SignCover/SignCover";
import LandingPage from "./components/LandingPage/LandingPage";
import MapPage from "./components/MapPage/MapPage";
import IceGraphPage from "./components/IceGraphPage/IceGraphPage";
import TempGraphPage from "./components/TempGraphPage/TempGraphPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignCover />} />
        <Route path="/map-page" element={<MapPage />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/ice-graph-page" element={<IceGraphPage />} />
        <Route path="/temp-graph-page" element={<TempGraphPage />} />
      </Routes>
    </Router>
  );
}

export default App;
