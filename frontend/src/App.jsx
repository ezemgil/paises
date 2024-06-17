import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Navbar } from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";

// Pages
import Home from "./pages/Home";
import Countries from "./pages/Countries";
import About from "./pages/About";

function App() {
  return (
    <>
      <div className="d-flex flex-column vh-100">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
