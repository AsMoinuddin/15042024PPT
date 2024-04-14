import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Ppt from "./components/Ppt";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ppt" element={<Ppt />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
