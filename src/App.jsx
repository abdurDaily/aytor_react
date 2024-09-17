import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './assets/components/Home/Home'
import About from './assets/components/About/About'



function App() {

  return (
   <>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
       </Routes>
     </BrowserRouter>
   </>
  )
}

export default App
