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
    ChangeTaskStatus: (title: string, isDone: boolean) => void
    activeFilter: FilterType
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
        activeFilter,
    } = props

    return <div>
        <TodolistTitle title={title}/>
        <AddtaskForm createTask={createTask}/>
        <TasksList
            tasks={task}
            deleteTask={deleteTask}
            ChangeTaskStatus={ChangeTaskStatus}/>
        <FilterButtons
            changeTodolistFilter={changeTodolistFilter}
            activeFilter={activeFilter}/>

    </div>
}