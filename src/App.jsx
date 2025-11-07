import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContestDetails from "./Community-page";
import Home from "./home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contest" element={<ContestDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
