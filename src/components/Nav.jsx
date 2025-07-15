import { useState } from 'react'
import './nav.css'
function Nav() {
 const [color,setcolor] = useState('black');

 const handleClick = () => {
    setcolor('#291baf');
  };
  return (
    <div className='nav'>
        <div><span style={{color:'#291baf'}}>D</span>inabandhu <span style={{color:'#16079a'}}>B</span>arai</div>
        <div className='navRoute'>
            <button className='navBtn' onClick={handleClick} style={{ color: color }}><a className="navBtn" href="#home">Home</a></button>
            <button className='navBtn'><a className="navBtn" href="#about">About</a></button>
            <button className='navBtn'><a className="navBtn" href="#skills">Skills</a></button>
            <button className='navBtn'><a className="navBtn" href="#project">Projects</a></button>
            <button className='navBtn'><a className="navBtn" href="#contact">Contact</a></button>
        </div>
    </div>
  )
}

export default Nav