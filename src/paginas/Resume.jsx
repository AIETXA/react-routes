

import React from 'react'
import { Link } from 'react-router-dom'
import { experiences, studies } from '../data/resume.js'

function Resume() {
    return (
        <div className='experiencia-estudios'>
            <h3>Experiencia laboral</h3>
                <ul className='experiencia'>
                    {experiences.map((experience)=> (
                    <li key={experience.id}>
                        <h4>{experience.title}</h4>
                        <p>{experience.company}</p>
                        <p>{experience.date}</p>
                    </li>
                    ))};
                </ul>
        
            <h3>Estudios</h3>
                <ul className='estudios'>
                    {studies.map((study) => (
                    <li key={study.id}>
                        <h4>{study.title}</h4>
                        <p>{study.institution}</p>
                        <p>{study.date}</p>
                    </li>
                    ))}
                </ul>
        </div>
    )

}

export default Resume