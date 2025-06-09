import './App.css'
import {TaskType, TodolistItem} from "./TodolistItem";
import {useState} from "react";

function App() {


    const todolistTitle_1 = 'What to learn'

    const [tasks, setTasks] = useState<TaskType[]>([
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
        {id: 4, title: 'TS', isDone: true}
    ])


    return (
        <div className="app">
            <TodolistItem title={todolistTitle_1} task={tasks}/>
        </div>
    )
}

export default App
