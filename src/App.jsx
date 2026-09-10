import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/services"
import Footer from "./components/footer"



function App(){
  
  return <div className="min-h-screen bg-cream text-white overflow-hidden">
    <Navbar/>
    <Hero/>
    <Features/>
    <Footer/>
    
  </div>
}

export default App;