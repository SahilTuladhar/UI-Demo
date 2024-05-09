import SignCover from "./components/Sign/SignCover/SignCover";
import LandingPage from "./components/LandingPage/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignCover />} />
        <Route path="/landing-page" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
