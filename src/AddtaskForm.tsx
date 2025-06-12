import {ChangeEvent, useRef, useState} from "react";

type AddTaskFormPropsType = {
    createTask: (title: string) => void
}

export const AddtaskForm = ({createTask}: AddTaskFormPropsType) => {

    const inputRef = useRef<HTMLInputElement>(null)


    return <div>
        <input ref={inputRef}/>
        <button onClick={() => {
            if (
                inputRef.current) {
                createTask(inputRef.current.value)
                inputRef.current.value = ''
            }
        }}>+
        </button>
    </div>
}