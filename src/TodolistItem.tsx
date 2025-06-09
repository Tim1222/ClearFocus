import {TodolistTitle} from "./TodolistTitle";
import {AddtaskForm} from "./AddtaskForm";
import TasksList from "./TasksList";
import {FilterButtons} from "./FilterButtons";
import {FilterType} from "./App";

type TodolistItemPropsType = {
    title: string
    task: TaskType[]
    deleteTask: (taskId: number) => void
    changeTodolistFilter: (newFilterValue: FilterType) => void
}
export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export const TodolistItem = (props: TodolistItemPropsType) => {
    const {
        title,
        task,
        deleteTask,
        changeTodolistFilter,
    } = props

    return <div>
        <TodolistTitle title={title}/>
        <AddtaskForm/>
        <TasksList
            tasks={task}
            deleteTask={deleteTask}/>
        <FilterButtons changeTodolistFilter={changeTodolistFilter} />

    </div>
}