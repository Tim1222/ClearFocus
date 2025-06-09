import './App.css'
import {TaskType, TodolistItem} from "./TodolistItem";
import {useState} from "react";

export type FilterType = 'all' | 'active' | 'completed'

function App() {


    const todolistTitle_1 = 'What to learn'

    const [tasks, setTasks] = useState<TaskType[]>([
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
        {id: 4, title: 'TS', isDone: true}
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

    const deleteTask = (taskId: number) => {
        setTasks(tasks.filter(t => t.id !== taskId))
    }

    return (
        <div className="app">
            <TodolistItem
                title={todolistTitle_1}
                task={filteredTasks}
                deleteTask={deleteTask}
                changeTodolistFilter={changeTodolistFilter}/>
        </div>
    )
}

export default App
