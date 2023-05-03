import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react"
import Blog from "./pages/Blog.jsx"
import Home from "./pages/Home"
import { ScaleLoader } from "react-spinners"

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  }

  return (
    <div>
      {loading ? (
        <div className='w-full h-screen bg-inherit flex justify-center items-center'>
          <ScaleLoader css={override} size={150} color={"#eb2f4b"} loading={loading} />
        </div>
      ) : (
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
      )}
    </div>
  )
}

export default App
