import { useQuery } from "@apollo/client"
import { GET_USER_PROJECTS } from "../../utils/queries"
import { NavLink } from "react-router-dom"


export default function ProjectView() {
  const { loading, data } = useQuery(GET_USER_PROJECTS)
  const projectData = data?.getUserProjects || []
  console.log(data)
  return (
    <>
      <h1 className="pviewh1">Your Projects</h1>
      <div className="project-wrap">
        {
          projectData.map(project => (
            <div className="projectID" key={project._id}>
              <h3 className="projectTitle">{project.title}</h3>
              <p className="projectDescription">{project.description}</p>
              <div className="client-info clientInformation">
                <p>Client Name: {project.client_name}</p>
                <p>Client Address: {project.client_address}</p>
                <p>Client Phone Number: {project.client_phone_number}</p>
              </div>
              <div className="taskButtons">
                <NavLink className="buttonSave" to={`tasks/${project._id}`}>View Tasks</NavLink>
                <NavLink className="buttonSave" to={`task/create/${project._id}`}>Create a Task</NavLink>
              </div>
            </div>
          ))
        }
      </div>

    </>
  )
}