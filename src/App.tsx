import './App.css'
import {TaskType, TodolistItem} from "./TodolistItem";
import {useState} from "react";
import {v1} from "uuid";

export type FilterType = 'all' | 'active' | 'completed'

function App() {


    const todolistTitle_1 = 'What to learn'

    const [tasks, setTasks] = useState<TaskType[]>([
        {id: v1(), title: 'HTML', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'React', isDone: false},
        {id: v1(), title: 'TS', isDone: true}
    ])


    const [filter, setFilter] = useState<FilterType>('all')
    let filteredTasks: TaskType[] = []
    if (filter === 'all') {
        filteredTasks = tasks
    }
    if (filter === 'active') {
        filteredTasks = tasks.filter(t => t.isDone === false)
    }
    if (filter === 'completed') {
        filteredTasks = tasks.filter(t => t.isDone === true)
    }
    const changeTodolistFilter = (newFilterValue: FilterType) => {
        setFilter(newFilterValue)
    }

    const deleteTask = (taskId: string) => {
        setTasks(tasks.filter(t => t.id !== taskId))
    }

    const createTask = (title: string) => {
        const newTask: TaskType = {
            id: v1(),
            title,
            isDone: false
        }
        setTasks([...tasks, newTask])
    }

    const ChangeTaskStatus = (taskId: string) => {
        setTasks(tasks.map(t => t.id === taskId
            ? {...t, isDone: !t.isDone}
            : t))

        //setTasks(newState)
    }

    return (
        <div className="app">
            <TodolistItem
                title={todolistTitle_1}
                task={filteredTasks}
                deleteTask={deleteTask}
                changeTodolistFilter={changeTodolistFilter}
                createTask={createTask}
                ChangeTaskStatus={ChangeTaskStatus}/>
        </div>
    )
}

export default App