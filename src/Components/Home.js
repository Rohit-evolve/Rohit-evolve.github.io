import React from 'react'
import "../App.css"
import  rohit from "../assests/rohit.jpg"


export default function Home() {
  return (
    <div className= "container" >
      <div className = "row">

       <div className='col'>

       <img  src = {rohit}   className = "container ms-5 ps-5 mt-3 "  style = {{width: "400px", height: "450px"}} alt="employee"></img>
       </div> 
       <div className = "col">
        <div className = "container w-75 pt-2 pb-2 mb-4 mt-5" id = "intro">
          <p className = "text-dark mt-3"><strong>Enthusiastic Java Full Stack Developer with foundational knowledge in Core and Advanced
          Java, Spring Boot, and ReactJS. Proficient in HTML, CSS, and JavaScript, with experience in
          Oracle DB and MySQL. Eager to apply academic learning and project experience to contribute
          to innovative software solutions. Committed to continuous improvement and staying
          updated with industry trends.</strong>
          </p>
         <p><i>Feel free to explore the different sections of the site!</i></p>
         </div> 
        
        <div className = "row">
         <div className = "ms-5 col">
          <div className = "container ms-5 pt-2 pb-2 mb-4 mt-5" id="contact">
            <i className = "fas fa-phone"></i>
            <p style = {{display: 'inline'}}> +91 9963846798</p>
           </div>
         </div> 

         <div className = "ms-0 col">
          <div className = "container ms-0 pt-2 pb-2 mb-4 mt-5" id="mail">
            <i className = "fas fa-envelope ps-4 pe-2"></i>
            <p style = {{display: 'inline'}}> rohitkunta4@gmail.com </p>
           </div>
         </div> 
        </div>  
         

        
       </div>
      </div>
    </div>
  )
}
