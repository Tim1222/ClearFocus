import {EditableSpan} from "./EditableSpan.tsx";

type TodolistItemPropsType = {
    title: string
    deleteTodolistCallback: () => void
    changeTodolistTitle: (newTitle: string) => void
}

export const TodolistTitle = (props: TodolistItemPropsType) => {
    const {title, deleteTodolistCallback, changeTodolistTitle} = props

    return <h3>
        <EditableSpan title={title}
                      changeTitleCallback={(title: string) => changeTodolistTitle(title)}/>
        {/*{title}*/}
        <button onClick={() => deleteTodolistCallback()}>x</button>
    </h3>
}