import "./Header.css"
import {Link} from "react-router-dom"
export default function Header()
{
    return(
      <>   
      <div className = "bg  bg-secondary">
        <header className = "Header">
            <h1>Kunta Rohit</h1>
            <p>Asparing Software Developer</p>

            <nav>
             <Link id = "home" className = "navbar-brand pe-2 btn btn-link" to="/">Home</Link> 
             <Link id="about" className= "navbar-brand pe-2 btn btn-link" to="/about">About</Link>
             <Link  id = "project" className= "navbar-brand pe-2 btn btn-link" to="/project">Project</Link>
            </nav> 
        </header>
      </div>    

       
      </>  
    )
}