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
      <div  id='home' className='homeSection'>
        <div className='homeConText'><HomeContent/></div>
        <div className='homeConImg'><img src={myImage} alt="" /></div>
      </div>

      <div id='about' className="aboutSection">
        <div className='aboutConImg'></div>
        <div className='aboutConText'><AboutComponet/></div>
      </div>

      <div id='skills' className="skillSection"></div>
      <div id='project' className="projectSection"></div>
      <div id='contact' className="contactSection"></div>
    </>
  )
}

export default App
