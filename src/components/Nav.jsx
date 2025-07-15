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
            <button className='navBtn' onClick={handleClick} style={{ color: color }}>Home</button>
            <button className='navBtn'>About</button>
            <button className='navBtn'>Skills</button>
            <button className='navBtn'>Projoects</button>
            <button className='navBtn'>Contact</button>
        </div>
    </div>
  )
}

export default Nav