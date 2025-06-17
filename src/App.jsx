import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='navBar'><Nav/></div>
      <div className='homeSection'>
        <div className='homeConText'></div>
        <div className='homeConImg'></div>
      </div>
      <div className="aboutSection">
        <div className='aboutConImg'></div>
        <div className='aboutConText'></div>
      </div>
      <div className="skillSection"></div>
      <div className="projectSection"></div>
      <div className="contactSection"></div>
    </>
  )
}

export default App
