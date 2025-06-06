import {TodolistTitle} from "./TodolistTitle";
import {AddtaskForm} from "./AddtaskForm";
import TasksList from "./TasksList";
import {FilterButtons} from "./FilterButtons";

type TodolistItemPropsType = {
    title: string
    task: TaskType[]
}
export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export const TodolistItem = ({title, task}: TodolistItemPropsType) => {

    return <div>
        <TodolistTitle title={title}/>
        <AddtaskForm/>
        <TasksList tasks={task}/>
        <FilterButtons/>

    </div>
}