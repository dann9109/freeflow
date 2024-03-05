import { useQuery } from "@apollo/client"
import { GET_USER_PROJECTS } from "../../utils/queries"
import { NavLink } from "react-router-dom"


export default function ProjectView() {
  const {data: projectData} = useQuery(GET_USER_PROJECTS)
  return (
      <>
        <h1>Your Projects</h1>
        <div className="project-wrap">
        {
            projectData?.getUserProjects.map(project => (
              <div className="project" key={project._id}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="client-info">
                  <p>Client Name: {project.client_name}</p>
                  <p>Client Address: {project.client_address}</p>
                  <p>Client Phone Number: {project.client_phone_number}</p>
                </div>
                <NavLink to={`tasks/${project._id}`}>View Tasks</NavLink>
                <NavLink to={`task/create/${project._id}`}>Create a Task</NavLink>

              </div>
            ))
          }
        </div>
         
      </>
  )
}