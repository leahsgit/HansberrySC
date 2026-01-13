 /* LEAVE THIS FILE ALONE, this file contains the main page routing logic */

import './App.css'
import NavBar from './components/NavBar'
import { HashRouter, Routes, Route } from 'react-router-dom'
import About from './Pages/About'
import Form from './Pages/Form'
import ScrollToTopButton from './components/ScrollToTopButton'

function App() {
 
  return (
    <>
     <HashRouter>
       <NavBar />
       <Routes>
         <Route path="/" element={<About />} />
         <Route path="/form" element={<Form />} />
       </Routes>
        <ScrollToTopButton />
     </HashRouter>
    </>
  )

}

export default App
