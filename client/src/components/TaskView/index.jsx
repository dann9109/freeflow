import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { GET_TASKS_BY_PROJECT_ID } from "../../utils/queries"


export default function TaskView() {
  const params = useParams()
  const { data: taskData } = useQuery(GET_TASKS_BY_PROJECT_ID, {
    variables: {
      project_id: params.project_id
    }
  })
  console.log(params.project_id)
  return (
    <div>
      <h1>{taskData?.title} View</h1>
      <div className="task-wrap">
        {
          taskData?.getTasksByProjectId.tasks.map(task => (
            <div className="project" key={task._id}>
              <h4>{task.text}</h4>
              <p>Rate: {task.rate}</p>
              <p>Hours: {task.hours}</p>
              

              <button>Edit</button>
              <button>Delete</button>
              

            </div>
          ))
        }
      </div>
    </div>
  )
}