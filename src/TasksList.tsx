import {TaskType} from "./TodolistItem";

type TasksListPropsType = {
    tasks: TaskType[]
    deleteTask: (taskId: number) => void
}

const TasksList = ({tasks, deleteTask}: TasksListPropsType) => {

    const tasksList = tasks.length === 0
        ? <span>Ваш список пуст</span>
        : <ul>
            {
                tasks.map(t => <li><input type='checkbox' checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={() => deleteTask(t.id)}>x</button>
                </li>)
            }
        </ul>


    return (
        <>
            {tasksList}
        </>
    )
};

export default TasksList;