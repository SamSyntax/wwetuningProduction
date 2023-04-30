import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Blog from "./pages/Blog.jsx"
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <div className='overflow-hidden scroll-smooth scroll-hidden flex flex-col'>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path='/blog' element={<Blog />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
