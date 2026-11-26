import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './components/Layout/Layout'
import './App.css'
import Home from './pages/Home'
import Articles from './pages/Articles'
import About from './pages/About'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/> 
          <Route path="/articles" element={<Articles />} /> 
          <Route path="/articles/:id" element={<Articles />}/> 
          <Route path="/about" element={<About />}/> 
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
