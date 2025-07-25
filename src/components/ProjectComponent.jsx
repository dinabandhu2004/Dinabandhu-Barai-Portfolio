// ProjectComponent.jsx
import './ProjectComponent.css';
import Medicart from '../assets/Medicart.png';
import Campus from '../assets/Campus Canteen.png'
import Directory from '../assets/Directory.png'
import FaceExpresionRecognization from '../assets/Face Expression Recognization.png'

const ProjectComponent = () => {
    const Projects = [
        {
            type: 'Website',
            name: 'Medicart',
            image: Medicart,
            description: 'A platform to purchase medical equipment and medicine, and book appointments with certified doctors.',
            link:'https://github.com/dinabandhu2004/Medicart.git'
        },
        {
            type: 'Website',
            name: 'Campus Canteen',
            image: Campus,
            description: 'A website of campus to purchase canteen foods.',
            link:'https://github.com/dinabandhu2004/Campus-canteen---texibition2025.git'
        },
        {
            type: 'Website',
            name: 'Directory',
            image: Directory,
            description: 'A web diretory to keep track students and employees.',
            link:'https://github.com/dinabandhu2004/Student-Employee-Directory.git'
        },
        {
            type: 'Deep Learning Model',
            name: 'Facial Expresion Recognization',
            image: FaceExpresionRecognization,
            description: 'A Deep Learing model for understanding facial expresion',
            link:'https://github.com/dinabandhu2004/Facial-Expression-Recognition.git'
        },
        // Add more project objects here
    ];

    return (
       <section className="projects-section">
            <div className="projects-heading">
                <p className="section-subtitle">Latest Works</p>
                <h2 className="section-title">
                    Explore My Popular <span>Projects</span>
                </h2>
            </div>

            <div className="projects-list">
                {Projects.map((project, index) => (
                    <div
                        className={`project-card ${index % 2 !== 0 ? 'reverse' : ''}`}
                        key={index}
                    >
                        <div className="project-image">
                            <img src={project.image} alt={project.name} />
                        </div>
                        <div className="project-details">
                            <p className="project-type">{project.type}</p>
                            <h3 className="project-name">{project.name}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-icon">
                                <span><a href={project.link} target='_blank' rel="noopener noreferrer">↗</a></span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectComponent;
