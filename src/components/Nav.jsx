import { useState } from 'react'
import './nav.css'
import { FiMoreVertical } from "react-icons/fi"; // install react-icons if needed

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='nav'>
      <div className='nav-logo'>
        <span style={{ color: '#291baf' }}>D</span>inabandhu <span style={{ color: '#291baf' }}>B</span>arai
      </div>

      {/* Hamburger (three-dot) icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <FiMoreVertical size={32} />
      </div>

      <div className={`navRoute ${menuOpen ? 'open' : ''}`}>
        <button className='navBtn'><a className="navBtn" href="#home">Home</a></button>
        <button className='navBtn'><a className="navBtn" href="#about">About</a></button>
        <button className='navBtn'><a className="navBtn" href="#skills">Skills</a></button>
        <button className='navBtn'><a className="navBtn" href="#project">Projects</a></button>
        <button className='navBtn'><a className="navBtn" href="#contact">Contact</a></button>
      </div>
    </div>
  )
}

export default Nav
