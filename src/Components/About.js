import React from 'react'

import "./About.css"

import narayana from "../assests/narayana.png";
import sai from "../assests/Degree.jpg"
import masters from "../assests/Masters.png"
import java from "../assests/java-logo-1.png"
import javascript from "../assests/JavaScript-Symbol.png"
import html from "../assests/html.png"
import css from "../assests/CSS-Logo.png"
import boot from "../assests/spring-boot-logo.png"
import react from "../assests/react-js.png"
import oracle from "../assests/oracle.png"
import mysql from "../assests/mysql2.png"
import plsql from "../assests/pl-sql_icon-1.png"
import hacker from "../assests/Hacker.png"

export default function About() {
  return (
    
  <section>  
    <div className = "container">
      <div className = "row">
        <h1 style = {{fontSize: '30px', textDecoration: "underline"}} className='mt-1 pt-1'>Education</h1>
        <div className = "col mt-3" id="inter">
         <h4 className = "ms-3 text-success">Intermediate :</h4>
         <img  src = {narayana} style = {{height : "70px"}}className = "ms-3 ps-3" alt="narayana"></img>
          <div className= "ms-3  ps-3 mt-3">
           <p>Course : MPC</p>
           <p>Percentage : 88%</p>
           <p>June 2016 - June 2018</p>
          </div> 
        </div> 

        <div className = "col mt-3" id="degree">
        <h4 className = "ms-5 text-success">Degree :</h4>
         <img  src = {sai} style = {{height : "100px", width: "300px"}}className = "ms-4 ps-5" alt="narayana"></img>
          <div className= "ms-5  ps-5 mt-3" style = {{color : "darkblue"}}>
           <p>Course : B.Sc (MECS)</p>
           <p>Percentage : 84%</p>
           <p>July 2018 - August 2021</p>
          </div> 
        </div> 

      <div className = "col mt-3" id="pg">
        <h4 className = "ms-5 text-success">Masters :</h4>
         <img  src = {masters} style = {{height : "120px", width: "200px"}}className = "ms-4 ps-5" alt="narayana"></img>
          <div className= "ms-5  ps-5 mt-3">
           <p>Course : M.Sc (Computer Science)</p>
           <p>Percentage : 64%</p>
           <p>Dec 2021 - Oct 2023</p>
          </div> 
        </div>
      </div>

      <div>
        <h1 style = {{fontSize: '30px', textDecoration: "underline"}} className = "mt-5">Skills</h1>
        
        <div className = "container ms-5 ps-5 mt-4">
          <h4>Programming Languages</h4>
          <div className='container ms-5 mt-3 ps-0'  id="lang">
          <img src = {java}  className = " ms-3 pt-3 ps-4 pe-3 pb-3"  style = {{height: "120px", width : "150px"}} alt = "java"></img>
          <img  src = {javascript}  className = " ms-3 pt-3 pb-3" style = {{height: "100px", width : "130px"}} alt=""></img>
          </div>
        </div>

        <div className = "container mt-5 pt-3 ms-5 ps-5">
          <h4>Web-Technologies</h4>
          <div className='container ms-5 ps-3 mt-3' id="web">
            <img src= {html}  className=" ms-3 ps-3 mt-3 pb-2" style = {{height: "80px", width : "100px"}} alt = "html"></img>
            <img src = {css} className=" ms-3  ps-3 mt-3 pb-3" style = {{height: "90px", width : "140px"}} alt = "css"></img>
          </div>
        </div>

        <div className = "container mt-5 pt-3 ms-5 ps-5">
          <h4>FrameWorks</h4>
          <div className='container ms-5 ps-3 mt-3' id="frame">
            <img src= {boot}  className=" ms-3 ps-3 mt-3 pb-2" style = {{height: "80px", width : "150px"}} alt = "html"></img>
            <img src = {react} className=" ms-4  ps-4 mt-3 pb-3" style = {{height: "90px", width : "140px"}} alt = "css"></img>
          </div>
        </div>

        <div className = "container mt-5 pt-3 ms-5 ps-5">
          <h4>DataBase</h4>
          <div className='container ms-5 ps-3 mt-3' id="data">
            <img src= {oracle}  className=" ms-3 ps-3 mt-3 pb-2 " style = {{height: "80px", width : "180px"}} alt = "html"></img>
            <img src = {plsql} className=" ms-5  ps-3 mt-3 pb-3" style = {{height: "80px", width : "120px"}} alt = "css"></img>
            <img src = {mysql} className=" ms-5  ps-3 mt-3 pb-3" style = {{height: "80px", width : "120px"}} alt = "css"></img>
          </div>
        </div>

        <div className = "pt-5 mt-5">
        <h1 style = {{fontSize: '30px', textDecoration: "underline"}} className = "mt-5">Certifications</h1>
        <div className = "row ms-2 mt-0 pt-0 mb-2 pb-5">
          <div className = "col container ms-5 ps-5">
            <div className = "container ms-5 ps-5 mt-5" id="java">
             <h4>Java Certification from </h4>
             <img src= {hacker}  className=" ms-5 ps-0 mt-2 pb-4 pt-0 " style = {{height: "50px", width : "200px"}} alt = "html"></img>
            </div>
          </div>

          <div className = "col container ms-0 ps-0">
            <div className = "container ms-5 ps-5 mt-5" id="sql">
             <h4>SQL Certification from </h4>
             <img src= {hacker}  className=" ms-5 ps-0 mt-2 pb-4 pt-0 " style = {{height: "50px", width : "200px"}} alt = "html"></img>
            </div>
          </div>

        </div>
        </div>

        
        
      </div>


    </div>
  </section>  

 
  )
}
