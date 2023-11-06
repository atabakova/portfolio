import { useParams } from 'react-router-dom';
import BtnGitHub from '../components/btnGitHub/BtnGitHub';
import projects from './../helpers/projectsList.js';
import petprojects from './../helpers/petprojectsList.js';
import BtnWeb from '../components/BtnWeb/BtnWeb';

function Project() {
  const { id } = useParams();
  //const project = projects[id];

  let project = projects[id];
  if (id >= '6') {
    project = petprojects[id];
  }

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img
            src={project.imgBig}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Skills:</p>
            <br></br>
            <ul className="notbold list">
              {project.skills &&
                project.skills.split(',').map((el) => <li>{el}</li>)}
            </ul>
            <br></br>

            <br></br>
            <p className="notbold">Time: {project.time}</p>
            <p className="notbold">{project.description}</p>
            <br></br>
            {project.responsibilities && <p>Responsibilities:</p>}
            <br></br>
            <ul className="notbold list">
              {project.responsibilities &&
                project.responsibilities.split(',').map((el) => <li>{el}</li>)}
            </ul>
            <br></br>
          </div>
          {project.gitHubLink && <BtnGitHub link={project.gitHubLink} />}
          <br></br>
          {project.webLink && <BtnWeb link={project.webLink} />}
        </div>
      </div>
    </main>
  );
}

export default Project;
