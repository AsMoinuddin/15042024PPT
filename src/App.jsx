import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Ppt from "./components/Ppt";
import Stats from "./components/Stats";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/ppt" element={<Ppt />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
