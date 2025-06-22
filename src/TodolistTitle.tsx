type TodolistItemPropsType = {
    title: string
    deleteTodolistCallback: () => void
}

export const TodolistTitle = (props: TodolistItemPropsType) => {
    const {title, deleteTodolistCallback} = props

    return <h3>
        {title}
        <button onClick={()=> deleteTodolistCallback()}>x</button>
    </h3>
}