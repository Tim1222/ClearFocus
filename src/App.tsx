import './App.css'
import {TodolistItem} from "./TodolistItem";
import {useState} from "react";
import {v1} from "uuid";


export type FilterType = 'all' | 'active' | 'completed'
export type TodolistType = {
    id: string
    title: string
    filter: FilterType
}
const todolistId_1: string = v1()
const todolistId_2: string = v1()

export type TaskStateType = {
    [todolistId: string]: TaskType[]
}
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

function App() {

    const [todolists, setTodolists] = useState<TodolistType[]>([
        {id: todolistId_1, title: 'What to learn', filter: 'all'},
        {id: todolistId_2, title: 'What to Buy', filter: 'all'},
    ])

    const [tasks, setTasks] = useState<TaskStateType>({
        [todolistId_1]: [
            {id: v1(), title: 'HTML', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'React', isDone: false},
            {id: v1(), title: 'TS', isDone: false}
        ],
        [todolistId_2]: [
            {id: v1(), title: 'Water', isDone: true},
            {id: v1(), title: 'Bread', isDone: true},
            {id: v1(), title: 'Milk', isDone: false},
        ]
    })


    const deleteTask = (taskId: string, todolistId: string) => {
        // const todolistTasks: TaskType[] = tasks[todolistId]
        // const filteredTasks: TaskType[] = todolistTasks.filter(t => t.id !== taskId)
        // const newState: TaskStateType = {...tasks, [todolistId]: filteredTasks}
        // setTasks(newState)
        setTasks({...tasks, [todolistId]: tasks[todolistId].filter(t => t.id !== taskId)})

        //setTasks(tasks.filter(t => t.id !== taskId))
    }
    const createTask = (title: string, todolistId: string) => {
        setTasks({...tasks, [todolistId]: [...tasks[todolistId], {id: v1().toString(), title, isDone: false}]})
    }
    const changeTaskStatus = (taskId: string, isDone: boolean, todolistId: string) => {
        setTasks({
            ...tasks, [todolistId]: [...tasks[todolistId].map(t => t.id === taskId ? {...t, isDone: isDone} : t)]
        })

        //setTasks(newState)
    }
    const changeTodolistFilter = (newFilterValue: FilterType, todolistId: string) => {
        setTodolists(todolists.map(tl => tl.id === todolistId ? {...tl, filter: newFilterValue} : tl))
    }

    const deleteTodolist = (todolistId: string) => {
        setTodolists(todolists.filter(tl => tl.id !== todolistId))
        delete tasks[todolistId]
    }


    // const [filter, setFilter] = useState<FilterType>('all')


    const todolistComponents = todolists.map(tl => {

        let filteredTasks: TaskType[] = tasks[tl.id]
             if (tl.filter === 'active') {
            filteredTasks = tasks[tl.id].filter(t => !t.isDone)
        }
        if (tl.filter === 'completed') {
            filteredTasks = tasks[tl.id].filter(t => t.isDone)
        }

        return (
            <TodolistItem
                key={tl.id}
                id={tl.id}
                title={tl.title}
                activeFilter={tl.filter}
                task={filteredTasks}

                deleteTask={deleteTask}
                changeTodolistFilter={changeTodolistFilter}
                createTask={createTask}
                changeTaskStatus={changeTaskStatus}
                deleteTodolist={deleteTodolist}
                />
        )
    })

    return (
        <div className="app">
            {todolistComponents}
        </div>
    )
}

export default App