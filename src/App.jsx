import { useState } from 'react'
import './App.css'
import myImage from './assets/myImage.jpg'
import Nav from './components/Nav'
import HomeContent from './components/HomeContent'
import AboutComponet from './components/aboutComponet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='navBar'><Nav/></div>
      <div className='homeSection'>
        <div className='homeConText'><HomeContent/></div>
        
        <div className='homeConImg'><img src={myImage} alt="" /></div>
      </div>
      <div className="aboutSection">
        <div className='aboutConImg'></div>
        <div className='aboutConText'><AboutComponet></AboutComponet></div>
      </div>
      <div className="skillSection"></div>
      <div className="projectSection"></div>
      <div className="contactSection"></div>
    </>
  )
}

export default App
