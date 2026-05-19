
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import HeroSection from './pages/component/Herosection'
import About from './pages/component/About'
import HomePage from './pages/homepage/Homepage'
import Help from "./pages/component/Help"
import Contactus from './pages/component/Contactus'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'


function App() {

  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
   
    <Route path='/Herosection' element={<HeroSection/>}/>
    <Route path='/' element={<HomePage />}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Help' element={<Help />}/>
    <Route path='/Contactus' element ={<Contactus/>}/>
   </Routes>
    <Footer/>
   </BrowserRouter>

  )
}

export default App
