import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Nav from "../components/Navbar2"
// import Navbar from "./components/Navbar";
import PortfolioPrev from "../components/PortfolioPrev"
import Services from "../components/Services"
import bgmain from "../assets/bgmain.png"
import License from "../components/License"
import Socials from "../components/Socials"
import Divider from "../components/Divider"
import SimpleSlider from "../components/Slider"

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgmain})`,
      }}
      className='overflow-hidden scroll-smooth scroll-hidden flex flex-col'
    >
      {/* <Navbar /> */}
      <Socials />
      <Nav />
      <Hero />
      <Services />
      <Divider />
      <License />
      <SimpleSlider />
      <PortfolioPrev />
      <Contact />
    </div>
  )
}

export default App
