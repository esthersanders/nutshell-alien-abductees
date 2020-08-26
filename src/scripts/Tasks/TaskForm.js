/* Esther Sanders ... renders a form that allows user to create a new event
listens for createTask event
listens for editTask event */

import {saveTask, editTask, useTasks } from "./TaskDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".formContainer")

//listens for edit button click Event
eventHub.addEventListener("editClicked", customEvent => {
    const allTasks = useTasks()
    const taskId = customEvent.detail.taskId
    const taskObjToEdit = allTasks.find(taskObj => taskId === taskObj.id)

    let taskName = document.querySelector("#taskName")
    let taskTargetDate = document.querySelector("#targetDate")
    let id = document.querySelector("#taskId")

    taskName.value = taskObjToEdit.task
    taskTargetDate = taskObjToEdit.targetDate
    id.value = parseInt(taskId)
})


//listens for save task click event
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveTask") {
        const taskName = document.querySelector("#taskName")
        const taskTargetDate = document.querySelector("#targetDate")
        const id = document.querySelector("#taskId")
    
    if (taskName.value && taskTargetDate.value) {
        const id = document.querySelector("#taskId")
        if (id.value === "") {

            const newTask = {
                task: taskName.value,
                targetDate: taskTargetDate.value
            }
            saveTask(newTask)
        } else {
            const editedTask = {
                task: taskName.value,
                targetDate: taskTargetDate.value,
                id: parseInt(id.value)
            }
            editTask(editedTask)
            id.value = ""
        }
    } else {
        window.alert("Please complete all fields")
    }
}
})


const render = () => {
    contentTarget.innerHTML = `
    <div class="taskForm">
        <input type="text" id="taskName">Task:
        <label for="targetDate">Target Date: </label>
        <input type ="date" name="targetDate" id="targetDate">  
        <input type="hidden" name="taskId" id="taskId"> 
        <button id="saveTask">Save Task</button>
    </div>
    `
}

export const TaskForm = () => {
    render()
}