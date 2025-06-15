import {TaskType} from "./TodolistItem";

type TasksListPropsType = {
    tasks: TaskType[]
    deleteTask: (taskId: string) => void
    ChangeTaskStatus: (taskId: string) => void
}

const TasksList = ({tasks, deleteTask, ChangeTaskStatus}: TasksListPropsType) => {
    const tasksList = tasks.length === 0
        ? <span>Ваш список пуст</span>
        : <ul>

            {
                tasks.map(t => <li key={t.id}><input
                    type='checkbox'
                    checked={t.isDone}
                    onClick={() => ChangeTaskStatus(t.id)}
                />
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