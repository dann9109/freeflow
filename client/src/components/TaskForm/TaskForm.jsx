import { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client'

import { CREATE_TASK, EDIT_TASK } from '../graphql/mutations'
import { GET_ALL_TASK, GET_USER_TASK } from '../graphql/queries'

import { useStore } from '../store'

function TaskForm() {
    const { state, setState } = useStore()
    const [taskText, setTaskText] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [createTask] = useMutation(CREATE_TASK, {
        variables: {
            text: taskText
        },
        refetchQueries: [GET_ALL_TASK, GET_USER_TASK]
    })
    const [editTask] = useMutation(EDIT_TASK, {
        variables: {
            text: taskText,
            task_id: state.editTask?._id
        },
        refetchQueries: [GET_USER_TASK]
    })

    useEffect(() => {
        if (state.editTask) {
            setTaskText(state.editTask.text)
        }
    }, [])

    const createOrEditTask = async (e) => {
        e.preventDefault()

        if (!state.editTask) {
            try {
                await createTask()

                setState({
                    ...state,
                    showTaskForm: false
                })

                setErrorMessage('')
            } catch (err) {
                setErrorMessage(err.message)
            }
        } else {
            try {
                await editTask()

                setState({
                    ...state,
                    showTaskForm: false,
                    editTask: null
                })

                setErrorMessage('')
            } catch (err) {
                setErrorMessage(err.message)
            }
        }
    }

    const closeModal = () => {
        setState({
            ...state,
            showTaskForm: false,
            editTask: null
        })
    }

    const handleInputChange = (e) => {
        setTaskText(e.target.value)
    }

    return (
        <div className="task-form">
            <h1 className="text-center">{state.editTask ? 'Edit' : 'Create'} Task</h1>

            <form onSubmit={createOrEditTask} className="column">
                {errorMessage && <p className="error text-center">{errorMessage}</p>}
                <input
                    value={taskText}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Enter the task text"
                    autoFocus />
                <button>{state.editTask ? 'Save' : 'Create'}</button>
                <button onClick={closeModal} className="cancel-btn">Cancel</button>
            </form>
        </div>
    )
}

export default TaskForm