import {TaskType} from "./TodolistItem";
import {an} from "vitest/dist/chunks/reporters.D7Jzd9GS";

type TasksListPropsType = {
    tasks: TaskType[]
    deleteTask: (taskId: string) => void
    ChangeTaskStatus: (taskId: string, isDone: boolean) => void
}

const TasksList = ({tasks, deleteTask, ChangeTaskStatus}: TasksListPropsType) => {


    const tasksList = tasks.length === 0
        ? <span>Ваш список пуст</span>
        : <ul>

            {
                tasks.map(t => {
                    const taskClass = t.isDone ? 'task-done' : 'task'
                    return (
                        <li key={t.id}><input
                            type='checkbox'
                            checked={t.isDone}
                            onClick={(e) => ChangeTaskStatus(t.id, e.currentTarget.checked)}
                        />
                            <span className={taskClass}>{t.title}</span>
                            <button onClick={() => deleteTask(t.id)}>x</button>
                        </li>)

            })
            }
        </ul>


    return (
        <>
            {tasksList}
        </>
    )
};

export default TasksList;