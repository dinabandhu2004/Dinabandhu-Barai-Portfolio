import './nav.css'
function Nav() {
  return (
    <div className='nav'>
        <div><span style={{color:'#16079a'}}>D</span>inabandhu <span style={{color:'#16079a'}}>B</span>arai</div>
        <div className='navRoute'>
            <button className='navBtn'>Home</button>
            <button className='navBtn'>About</button>
            <button className='navBtn'>Skills</button>
            <button className='navBtn'>Projoects</button>
            <button className='navBtn'>Contact</button>
        </div>
    </div>
  )
}

export default Nav