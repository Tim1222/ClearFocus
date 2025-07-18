import {EditableSpan} from "./EditableSpan.tsx";
import {IconButton} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Typography from '@mui/material/Typography';




type TodolistItemPropsType = {
    title: string
    deleteTodolistCallback: () => void
    changeTodolistTitle: (newTitle: string) => void
}

export const TodolistTitle = (props: TodolistItemPropsType) => {
    const {title, deleteTodolistCallback, changeTodolistTitle} = props

    return <Typography variant="h6">
        <EditableSpan title={title}
                      changeTitleCallback={(title: string) => changeTodolistTitle(title)}/>
        {/*{title}*/}
        <IconButton color='primary' size='medium'
                    onClick={() => deleteTodolistCallback()}><HighlightOffIcon/></IconButton>
    </Typography>

}
