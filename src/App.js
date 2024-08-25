import React from 'react'
import { HashRouter,Routes, Route} from "react-router-dom"
import Home from './Components/Home.js'
import Project from './Components/Project.js'
import About from './Components/About.js'
import Contact from './Components/Contact.js'
import Header from './Components/Header.js'



export default function App() {
  return (
    <div>
      <div className = "div">
      <HashRouter>
        <Header/>
        <Routes>
          <Route path = "/" element = {<Home/>}></Route>
         
          <Route path="/about" element = {<About/>}> </Route>
      
          <Route path = "/project" element = {<Project/>}>   </Route>
          <Route path = "/Contact" element = {<Contact/>}> </Route>

        </Routes>
      </HashRouter>
      </div> 
    </div>
  )
}
