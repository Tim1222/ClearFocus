import './App.css'
import {TaskType, TodolistItem} from "./TodolistItem";

function App() {


    const todolistTitle_1 = 'What to learn'
    const todolistTitle_2 = 'What to buy'

    const tasks_1: TaskType[] = [
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
        {id: 4, title: 'TS', isDone: true}
    ]
    const tasks_2: TaskType[] = [
        {id: 4, title: 'Milch', isDone: false},
        {id: 5, title: 'Broat', isDone: true},
        {id: 6, title: 'Cheeps', isDone: true}
    ]


    return (
        <div className="app">
            <TodolistItem title={todolistTitle_1} task={tasks_1}/>
            <TodolistItem title={todolistTitle_2} task={tasks_2}/>
        </div>
    )
}

export default App
