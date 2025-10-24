import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import About from "./pages/About";
import Footer from "./components/Footer";
import Apply from "./pages/Apply";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/about" element={<About />} />
         <Route path="/apply/:companyName" element={<Apply />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );

}
