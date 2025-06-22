
import React from "react"
import { Link } from "react-router-dom"
import '../App';

function Home() {
    return (
      <div className="home-container">
        <div className="overlay"></div>
        <div className="home-content">
         <h2>Bienvenido a mi porfolio</h2>
          <h1>Ailén Echaguibel Meyer</h1>
           <p className="intro">¡Hola! Gracias por visitarme. Soy fotografa freelance, ahora estudiante de Desarrollo Full Stack, 
            y me encanta estar en constante crecimiento.</p>
            <p>Te invito a que veas algunos de mis <Link to="/projects">proyectos</Link></p>
        </div>
     </div>
    )
}

export default Home;