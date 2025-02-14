import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CocktailPage from "./pages/CocktailPage";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/id/:id/:slug" element={<CocktailPage />} />
      </Routes>
    </Router>
  );
}
