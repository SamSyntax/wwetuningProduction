import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Nav from "../components/Navbar2"
// import Navbar from "./components/Navbar";
import PortfolioPrev from "../components/PortfolioPrev"
import Services from "../components/Services"
import bgmain from "../assets/bgmain.png"
import License from "../components/License"

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgmain})`,
      }}
      className='overflow-hidden scroll-smooth scroll-hidden flex flex-col'
    >
      {/* <Navbar /> */}

      <Nav />
      <Hero />
      <PortfolioPrev />
      <License />
      <Services />
      <Contact />
    </div>
  )
}

export default App
