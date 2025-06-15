import {TodolistTitle} from "./TodolistTitle";
import {AddtaskForm} from "./AddtaskForm";
import TasksList from "./TasksList";
import {FilterButtons} from "./FilterButtons";
import {FilterType} from "./App";

type TodolistItemPropsType = {
    title: string
    task: TaskType[]
    deleteTask: (taskId: string) => void
    changeTodolistFilter: (newFilterValue: FilterType) => void
    createTask: (title: string) => void
    ChangeTaskStatus: (title: string) => void
}
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export const TodolistItem = (props: TodolistItemPropsType) => {
    const {
        title,
        task,
        deleteTask,
        changeTodolistFilter,
        createTask,
        ChangeTaskStatus,
    } = props

    return <div>
        <TodolistTitle title={title}/>
        <AddtaskForm createTask={createTask}/>
        <TasksList
            tasks={task}
            deleteTask={deleteTask}
            ChangeTaskStatus={ChangeTaskStatus}/>
        <FilterButtons changeTodolistFilter={changeTodolistFilter}/>

    </div>
}