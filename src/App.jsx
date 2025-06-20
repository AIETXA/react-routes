import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import routes from './routes'
import { Link } from 'react-router-dom'
import './app.css'

function App() {
    return (
        <Router>
            <nav>
                <Link to={'/'}>Home</Link> |{''}
                <Link to={'/Projects'}>Projects</Link> |{''}
                <Link to={'/Resume'}>Resume</Link> |{''}

            </nav>
            <Routes>
                <Route>
                    {routes.map((ruta) => (
                    <Route key={ruta.path} path={ruta.path} element={ruta.element} />
                    ))}
                </Route>
            </Routes>
        </Router>
    )
}

export default App