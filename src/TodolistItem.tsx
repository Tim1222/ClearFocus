import {TodolistTitle} from "./TodolistTitle";
import {AddtaskForm} from "./AddtaskForm";
import TasksList from "./TasksList";
import {FilterButtons} from "./FilterButtons";

type TodolistItemPropsType = {
    title: string
    task: TaskType[]
    deleteTask: (taskId: number) => void
}
export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export const TodolistItem = (props: TodolistItemPropsType) => {
    const {title, task, deleteTask} = props

    return <div>
        <TodolistTitle title={title}/>
        <AddtaskForm/>
        <TasksList
            tasks={task}
            deleteTask={deleteTask}/>
        <FilterButtons/>

    </div>
}