import './HomeContent.css'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { ReactTyped } from 'react-typed';

const HomeContent = () => {
  return (
    <div className="content">
      <div className='fontSmall'>Hello! I am</div>
      <div className='fontBig'>Dinabandhu Barai</div>
      <div className='fontSmall typing'>
        <ReactTyped
          strings={[
            "FullStack Developer",
            "Software Developer",
            "Programmer"
          ]}
          typeSpeed={80}
          backSpeed={50}
          loop
        />
      </div>
      <button className='fontSmall btn-col'>
        <a href="#contact" style={{ textDecoration: 'none', backgroundColor: "#291baf" }}>
          Contact
        </a>
      </button>
      <div className='Homelinks'>
        <div>
          <a href="https://github.com/dinabandhu2004" target="_blank" rel="noopener noreferrer">
            <FaGithub/>
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/dinabandhu-barai-802668244/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin/>
          </a>
        </div>
        <div>
          <a href="mailto:dinabandhu2004barai@gmail.com">
            <FaEnvelope/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomeContent;
