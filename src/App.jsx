import { useState } from 'react'
import './App.css'
import myImage from './assets/myImage.jpg'
import myImage2 from './assets/myImage2.jpg'
import Nav from './components/Nav'
import HomeContent from './components/HomeContent'
import AboutComponet from './components/aboutComponet'
import SkillsComponent from './components/SkillsComponent'
import ContactComponent from './components/contactComponent'
import FooterComponent from './components/FooterComponent'

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
        <div className='aboutConImg'><img src={myImage2} alt=""/></div>
        <div className='aboutConText'><AboutComponet/></div>
      </div>

      <div id='skills' className="skillSection"><SkillsComponent/></div>
      <div id='project' className="projectSection"></div>
      <div id='contact' className="contactSection"><ContactComponent/> <FooterComponent/></div>
    </>
  )
}

export default App
