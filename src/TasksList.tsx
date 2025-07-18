import {TaskType} from "./TodolistItem";
import {EditableSpan} from "./EditableSpan.tsx";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {IconButton} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


type TasksListPropsType = {
    tasks: TaskType[]
    deleteTask: (taskId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
    changeTasksTitle: (taskId: string, title: string) => void
}

const TasksList = ({
                       tasks,
                       deleteTask,
                       changeTaskStatus,
                       changeTasksTitle
                   }: TasksListPropsType) => {


    const tasksList = tasks.length === 0
        ? <span className={'taskList-span'}>Ваш список пуст</span>
        : <List disablePadding>

            {
                tasks.map(t => {
                    const taskClass = t.isDone ? 'task-done' : 'task'

                    return (
                        <ListItem key={t.id} disablePadding>
                            <Checkbox
                                size='small'
                                color='secondary'
                                checked={t.isDone}
                                onChange={(e) => changeTaskStatus(t.id, e.currentTarget.checked)}
                            />
                            {/*<span className={taskClass}>{t.title}</span>*/}
                            <EditableSpan
                                classes={taskClass}
                                title={t.title}
                                changeTitleCallback={(title: string) => changeTasksTitle(t.id, title)}
                            />
                            <IconButton
                                size='small'
                                onClick={() => deleteTask(t.id)}>
                                <HighlightOffIcon/>
                            </IconButton>
                        </ListItem>)

                })
            }
        </List>


    return (
        <>
            {tasksList}
        </>
    )
};

export default TasksList;