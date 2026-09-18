import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/footer";
import AboutUs from "./pages/AboutUs";
import Form from "./pages/test";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="min-h-screen bg-cream text-white flex flex-col justify-between">
      <Router>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/aboutUs" element={<AboutUs/>}/>
            <Route path="/form" element={<Form/>}/>
          </Routes>
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;