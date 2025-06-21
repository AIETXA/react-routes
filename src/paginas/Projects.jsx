
import React from 'react'
import { Link } from 'react-router-dom'
import projects from '../data/projects'

function Projects() {
return (
    <div className='project-container'>
    <h3>PROYECTOS DEL PORFOLIO.</h3>
    <ul className='project-grid'>
    {projects.map((project) => (
        <li key={project.id} className='project-card'>
        <h4>{project.name}</h4>
        <img src={project.image} alt={project.name}/>
        <p>{project.description}</p>
        <a href={project.url} target="_blank" rel="url">Ver proyecto</a>
        </li>
    ))}
    </ul>
    </div>
)
}

export default Projects