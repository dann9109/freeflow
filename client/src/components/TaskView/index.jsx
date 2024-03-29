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
      <h1 className="allTaskHeader">{taskData?.title} All Tasks</h1>
      <div className="task-wrap">
        {
          taskData?.getTasksByProjectId.tasks.map(task => (

            <div className="project" key={task._id}>
              <h4 className="standardText">{task.text}</h4>
              <p className="standardText">Rate: {task.rate}</p>
              <p className="standardText">Hours: {task.hours}</p>
              <p className="standardText">Total: ${task.rate * task.hours}</p>

              <button className="buttonSave editTaskButton">Edit</button>
              <button className="buttonSave SaveTaskChangesButton" >Save Changes</button>
              <button className="buttonSave deleteTaskButton" >Delete</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}