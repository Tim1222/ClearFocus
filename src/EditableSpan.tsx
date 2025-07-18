import {ChangeEvent, useState} from "react";
import {TextField} from "@mui/material";

type EditableSpanType = {
    title: string
    classes?: string
    changeTitleCallback: (title: string) => void
}

export const EditableSpan = ({
                                 title,
                                 classes,
                                 changeTitleCallback
                             }: EditableSpanType) => {
    const [isEditMode, setIsEditMode] = useState(false)
    const [titleInput, setTitleInput] = useState(title)


    const onEditMode = () => setIsEditMode(true)
    const offEditMode = () => {
        setIsEditMode(false)
        changeTitleCallback(titleInput)
    }
    const setTitleInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitleInput(e.currentTarget.value)
    }
    return (
        isEditMode
            ? <TextField
                variant='standard'
                value={titleInput}
                autoFocus
                onBlur={offEditMode}
                onChange={setTitleInputHandler}
            />
            : <span
                onDoubleClick={onEditMode}
                className={classes}
            >{title}</span>
    )

}