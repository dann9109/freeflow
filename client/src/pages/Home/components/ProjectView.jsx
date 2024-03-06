import { useQuery } from '@apollo/client';
import { GET_ALL_PROJECTS } from '../../../utils/queries';
import { Row, Col } from 'react-bootstrap';


export default function ProjectView() {
  const { data: projectData } = useQuery(GET_ALL_PROJECTS);

  return (
    <div>
      <h2 className="project-home-title">See what others are working on</h2>

      <div className="project-wrap home">
        {
          !projectData?.getAllProjects.length ? (
            <p>No projects have been created.</p>
          ) : (
            projectData?.getAllProjects.map(project => (
              <div className="project" key={project._id}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))
          )
        }
      </div>
    </div>
  )
}