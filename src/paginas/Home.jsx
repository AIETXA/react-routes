//La ruta `/` renderizará el componente `Home`. 
// Este componente mostrará la página de inicio del portfolio. 
// En esta página, se mostrará una breve descripción del desarrollador.
import React from "react"
import { Link } from "react-router-dom"

function Home() {
    return (
        <>
        <h3>Bienvenido a mi porfolio</h3>
        <h1>Ailén Echaguibel Meyer</h1>
           <p>¡Hola! Gracias por visitarme. Soy fotografa freelance, ahora estudiante de Desarrollo Full Stack, 
            y me encanta estar en constante crecimiento.</p>
            <p>Te invito a que veas algunos de mis <Link to="/projects">proyectos</Link></p>
        </>
    )
}

export default Home;