import './SkillsComponent.css';
import C from '../assets/C.png';
import Python from '../assets/Python.png'
import JavaScript from '../assets/JavaScript.png'
import HTML from '../assets/HTML.jpeg'
import CSS from '../assets/CSS.png'
import React1 from '../assets/React1.png'
import Bootstrap from '../assets/Bootstrap.png'
import Nodejs from '../assets/Nodejs.png'
import Mongodb from '../assets/Mongodb.png'
import Git from '../assets/Git.png'
import Github from '../assets/Github.png'

const skills = [
  { name: 'C', icon: C },
  { name: 'Python', icon: Python },
  { name: 'JavaScript', icon: JavaScript },
  { name: 'HTML', icon: HTML },
  { name: 'CSS', icon: CSS },
  { name: 'React', icon: React1 },
  { name: 'Bootstrap', icon: Bootstrap },
  { name: 'Nodejs', icon: Nodejs },
  { name: 'Mongodb', icon: Mongodb },
  { name: 'Git', icon: Git },
  { name: 'Github', icon: Github },
  // add more if you have
];

const SkillsComponent = () => {
  return (
    <div className="skills-container">
      <div className="skillhead">
        My professional <span>Skills</span>
      </div>
      <div className="flex-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skillimg">
              <img src={skill.icon} alt={skill.name} />
            </div>
            <div>{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsComponent;
