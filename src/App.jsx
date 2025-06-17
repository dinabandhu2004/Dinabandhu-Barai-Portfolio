import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='navBar'></div>
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
