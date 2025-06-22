import {TaskType} from "./TodolistItem";

type TasksListPropsType = {
    tasks: TaskType[]
    deleteTask: (taskId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
}

const TasksList = ({tasks, deleteTask, changeTaskStatus}: TasksListPropsType) => {


    const tasksList = tasks.length === 0
        ? <span className={'taskList-span'}>Ваш список пуст</span>
        : <ul>

            {
                tasks.map(t => {
                    const taskClass = t.isDone ? 'task-done' : 'task'

                    return (
                        <li key={t.id}>
                            <input
                                type='checkbox'
                                checked={t.isDone}
                                onClick={(e) => changeTaskStatus(t.id, e.currentTarget.checked)}
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