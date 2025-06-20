import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import routes from './routes'

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

                </Route>
            </Routes>
        </Router>
    )
}

export default App