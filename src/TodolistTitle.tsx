type TodolistItemPropsType = {
    title: string
}

export const TodolistTitle = (props: TodolistItemPropsType) => {
    const {title} = props

    return <h3>{title}</h3>
}