import {TodolistTitle} from "./TodolistTitle";
import {AddItemForm} from "./AddItemForm.tsx";
import TasksList from "./TasksList";
import {FilterButtons} from "./FilterButtons";
import {FilterType} from "./App";

type TodolistItemPropsType = {
    id: string
    title: string
    task: TaskType[]
    deleteTask: (taskId: string, todolistId: string) => void
    changeTodolistFilter: (newFilterValue: FilterType, todolistId: string) => void
    createTask: (title: string, todolistId: string) => void
    changeTaskStatus: (title: string, isDone: boolean, todolistId: string) => void
    activeFilter: FilterType
    deleteTodolist: (todolistId: string) => void
    changeTasksTitle: (taskId: string, title: string, todolistId: string) => void
    changeTodolistTitle: (newTitle: string, todolistId: string) => void
}
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export const TodolistItem = (props: TodolistItemPropsType) => {
    const {
        id,
        title,
        task,
        deleteTask,
        changeTodolistFilter,
        createTask,
        changeTaskStatus,
        activeFilter,
        deleteTodolist,
        changeTasksTitle,
        changeTodolistTitle
    } = props

    return <div>
        <TodolistTitle
            title={title}
            deleteTodolistCallback={() => deleteTodolist(id)}
            changeTodolistTitle={(newTitle: string)=>{
                changeTodolistTitle(newTitle, id)
            }}
        />
        <AddItemForm
            createItem={(title: string) => createTask(title, id)}
            maxTitleLengs={10}
        />
        <TasksList
            tasks={task}
            deleteTask={(taskId: string) => deleteTask(taskId, id)}
            changeTaskStatus={(taskId: string, isDone: boolean) => changeTaskStatus(taskId, isDone, id)}
            changeTasksTitle={(taskId: string, title: string) => {
                changeTasksTitle(taskId, title, id)
            }}
        />
        <FilterButtons
            changeTodolistFilter={(filter: FilterType) => changeTodolistFilter(filter, id)}
            activeFilter={activeFilter}
            //changeTodolistTitle={}
        />

    </div>
}