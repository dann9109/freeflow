mport { useState } from 'react'
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
        <div className="task-form">
            <h1 className="text-center">Create Task</h1>

            <form onSubmit={handleCreateTask} className="column">
                {errorMessage && <p className="error text-center">{errorMessage}</p>}
                <input
                    value={formData.text}
                    name="text"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Enter the task text"
                    autoFocus />
                <input
                    value={formData.rate}
                    name="rate"
                    onChange={handleInputChange}
                    type="number"
                    placeholder="Enter the task rate"
                />
                <input
                    value={formData.hours}
                    name="hours"
                    onChange={handleInputChange}
                    type="number"
                    placeholder="Enter the task hours"
                />
                <button>Add Task</button>

            </form>
        </div>
    )
}

export default TaskForm