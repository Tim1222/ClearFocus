import {EditableSpan} from "./EditableSpan.tsx";

type TodolistItemPropsType = {
    todolistId: string
    title: string
    deleteTodolistCallback: () => void
    changeTodolistTitle: (newTitle: string, todolistId: string) => void
}

export const TodolistTitle = (props: TodolistItemPropsType) => {
    const {todolistId, title, deleteTodolistCallback, changeTodolistTitle} = props

    return <h3>
        <EditableSpan title={title}
                      changeTitleCallback={(title: string) => changeTodolistTitle(title, todolistId)}/>
        {/*{title}*/}
        <button onClick={() => deleteTodolistCallback()}>x</button>
    </h3>
}