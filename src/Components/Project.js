import React from 'react'

import "./About.css"

import empl from "../assests/Employee1.png"
import java from "../assests/java-logo-1.png"
import boot from "../assests/spring-boot-logo.png"
import react from "../assests/react-js.png"
import mysql from "../assests/mysql2.png"
import weather from "../assests/weather.webp"
import html from "../assests/html.png"
import css from "../assests/CSS-Logo.png"
import axios from "../assests/axios.png"

export default function Project() {
  return (
    <div className = "container">
       <h1 style = {{fontSize: '40px', textDecoration: "underline"}} className='mt-3 pt-1'>Projects</h1>

       <div className='container ms-4 pt-3 row'>
        <div className='col'>
         <h4>Employee Management System</h4>
          
             <div id="img">
               <img  src = {empl}  className = "container pt-3" alt="employee" ></img>
               <div id="Link" className='mt-2 ps-5'>
               <a href = "https://github.com/Rohit-evolve/Employee-management" className='mt-3' id="anchor">github-link</a>
               </div>
              </div> 
             
          
          <div className = "mt-4 ms-3"  id = "tools">
          <img src = {java}  className = " ms-0 pt-2 mt-4 ps-4 pe-3 pb-4"  style = {{height: "120px", width : "150px"}} alt = "java"></img>
          <img src= {boot}  className=" ms-0 ps-3 mt-3 pb-2" style = {{height: "80px", width : "150px"}} alt = "html"></img>
          <img src = {react} className=" ms-0  ps-4 mt-3 pb-3" style = {{height: "90px", width : "140px"}} alt = "css"></img>
          <img src = {mysql} className=" ms-0  ps-3 mt-3 pb-3" style = {{height: "80px", width : "120px"}} alt = "css"></img>
          </div>
        </div> 

        <div className='col ms-5'>
          <div className = "container w-100 pt-2 pb-2 mb-4" id="employee">
            <p>Developed a user-friendly Employee Management System for
               efficient handling of employee records, including adding, editing, transferring, and terminating employees, task assignments, and
               performance assessments. Simplified HR processes for small and
               medium-sized companies</p>
            
            <p><strong>Responsibilities:</strong></p>

            <p>Analyzed requirements and assessed impacts.</p>
            <p>Designed ReactJS components.</p>
            <p>Implementing REST API's and their implementation with Spring Boot.</p>
            <p>Testing the REST API's by postman tool</p>
            <p>Configured application properties. </p>
            <p>Developed persistence layer with Spring Data JPA.</p>
            <p><b>Technologies: Java 8, Spring Boot, ReactJS, MySQL</b></p>

          </div>
        </div>
       </div>


       <div className='container ms-4 pt-5 row'>
        <div className='col'>
         <h4>Weather App</h4>
          <div id="img2">
           <img  src = {weather}  className = "container pt-3" style = {{width : '500px', height : '250px'}} alt="weather"></img>
             <div id="Link2" className='mt-4 ps-4'>
               <a href = "https://github.com/Rohit-evolve/Projects-" id="anchor2" className='mt-3'>Github-link</a>
             </div>  
          </div>
         <div className = "mt-4 ms-3 mb-4 pb-4"  id = "weather">
         <img src= {html}  className=" ms-3 ps-3 mt-3 pb-2" style = {{height: "80px", width : "100px"}} alt = "html"></img>
         <img src = {css} className=" ms-3  ps-3 mt-3 pb-3" style = {{height: "90px", width : "140px"}} alt = "css"></img>
         <img src = {react} className=" ms-0  ps-4 mt-3 pb-3" style = {{height: "90px", width : "140px"}} alt = "css"></img>
         <img src = {axios} className=" ms-0  ps-3 mt-3 pb-3" style = {{height: "80px", width : "120px"}} alt = "css"></img>

         </div>
        </div>

        <div className='col ms-5 mt-5 pt-5'>
          <div className= "container w-100 pt-2 pb-2 mb-4" id="weather-description">

           <p>Developed a user-friendly application that enabled users to quickly and easily access current 
            weather information for any city, enhancing overall user experience and convenience.</p>

           <p>Improved proficiency in ReactJS and API integration, contributing
             to a deeper understanding of frontend development and data
             handling. </p>

           <p><b>Technologies used: ReactJs, HTML,CSS, Axios, OpenWeatherMap API</b></p>   
         </div>
        </div>  
        
       </div>
    </div>
  )
}
