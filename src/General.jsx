import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Inicio from './Inicio'
import Tabla from './Tabla'

function General() {
return (
    <div>
        <Router>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='collapse navbar-collapse' id='navbarSupportContent'>
                    <ul className='navbar-nav mr-auto'>
                        <Link to='/Inicio' className='nav-link'>Inicio</Link>
                        <Link to='/Tabla' className='nav-link'>Tabla</Link>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path='/Inicio' element={<Inicio />} />
            </Routes>
            <Routes>
                <Route path='/Tabla' element={<Tabla />} />
            </Routes>
        </Router>
    </div>
    )
}

export default General
