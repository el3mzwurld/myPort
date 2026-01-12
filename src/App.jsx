import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import "./assets/styles/global.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/projects" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
