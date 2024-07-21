import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Education } from './Education';
import { Sports } from './Sports';
import { Tech } from './Tech';
import { Home } from './Home';
export const Nav = () => {
  return (
    <Router>
    <div>
        <nav>
          <ul className='flex flex-row items-center justify-center space-x-5 p-5 bg-gray-600 text-white text-xl'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/education'>Education</Link>
            </li>
            <li>
                <Link to='/sports'>Sports</Link>
            </li>
            <li>
                <Link to='/tech'>Technology</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/"  element={<Home cat='election'/>} />
          <Route path="/education" element={<Education cat='education'/>} />
          <Route path="/sports" element={<Sports cat='sports'/>} />
          <Route path="/tech" element={<Tech cat='tech'/>} />
        </Routes>
      </div>
    </Router>
  )
}
