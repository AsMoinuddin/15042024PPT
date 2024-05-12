import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Ppt from "./components/Ppt";
import Stats from "./components/Stats";
import Solution from "./components/Solution";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/ppt" element={<Ppt />} />
        <Route path="/solution" element={<Solution />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
