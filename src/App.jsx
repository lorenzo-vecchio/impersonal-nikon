import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import NoPage from "./pages/NoPage";
import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";

export default function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
