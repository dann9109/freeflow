import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useParams } from "react-router-dom"


import { CREATE_TASK } from '../../utils/mutations'
import { GET_ALL_PROJECTS, GET_USER_PROJECTS } from '../../utils/queries'


function TaskForm() {

    const params = useParams()
    const [formData, setFormData] = useState({
        text: '',
        rate: 0,
        hours: 0
    })

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const [errorMessage, setErrorMessage] = useState('')
    const [createTask] = useMutation(CREATE_TASK, {
        variables: {
            ...formData,
            rate: +formData.rate,
            hours: +formData.hours,
            project_id: params.project_id
        },
        refetchQueries: [GET_ALL_PROJECTS, GET_USER_PROJECTS]
    })



    const handleCreateTask = async (e) => {
        e.preventDefault()

        try {
            await createTask()

            setFormData({
                text: '',
                rate: 0,
                hours: 0
            })

            setErrorMessage('')
        } catch (err) {
            setErrorMessage(err.message)
        }
    }

    return (
        <div className="task-form taskCard">
            <h1 className="text-center createTask">Create Task</h1>

            <form onSubmit={handleCreateTask} className="column taskForm">


                {errorMessage && <p className="error text-center">{errorMessage}</p>}


                <label className="taskHead">Task Information:</label>
                <input className="taskInput"
                    value={formData.text}
                    name="text"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Enter the task text"
                    autoFocus />




                <label className="taskHead">Task Rate:</label>
                <input className="taskInput"
                    value={formData.rate}
                    name="rate"
                    onChange={handleInputChange}
                    type="number"
                    placeholder="Enter the task rate"
                 
                /> 


                <label className="taskHead">Task Hours:</label>
                <input className="taskInput"
                    value={formData.hours}
                    name="hours"
                    onChange={handleInputChange}
                    type="number"
                    placeholder="Enter the task hours"
                />
                <button className="saveTaskButton">Add Task</button>

            </form>
        </div>
    )
}

export default TaskForm