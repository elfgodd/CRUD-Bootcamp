import './App.css'
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom'

// Pages imports
import Home from './pages/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
