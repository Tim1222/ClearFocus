import {ChangeEvent, ChangeEventHandler, KeyboardEvent, useState} from "react";

type AddTaskFormPropsType = {
    createTask: (title: string) => void
}

export const AddtaskForm = ({createTask}: AddTaskFormPropsType) => {

    //const inputRef = useRef<HTMLInputElement>(null)
    const [taskInput, setTaskInput] = useState('')
    const CreateTaskHandler = () => {
        createTask(taskInput)
        setTaskInput('')
    }
    const DisableBtn = !taskInput || taskInput.length > 10
    const OnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTaskInput(e.currentTarget.value)
        console.log(taskInput)
    }
    const OnKeyTaskHandler = (e: KeyboardEvent<HTMLInputElement>) => {

        if (e.key === 'Enter' && !DisableBtn) {
            CreateTaskHandler()
        }

    }

    return <div>

        {/*<input ref={inputRef}/>*/}
        {/*<button onClick={() => {*/}
        {/*    if (*/}
        {/*        inputRef.current) {*/}
        {/*        createTask(inputRef.current.value)*/}
        {/*        inputRef.current.value = ''*/}
        {/*    }*/}
        {/*}}>+*/}
        {/*</button>*/}
        <input
            placeholder={'Max title 10 element'}
            value={taskInput}
            onKeyDown={OnKeyTaskHandler}
            onChange={OnChangeHandler}/>
        <button
            disabled={DisableBtn}
            onClick={CreateTaskHandler}>
            +
        </button>
        {taskInput && <div>Max title 10 element</div>}
        {taskInput.length > 10 && <div style={{color: 'red'}}>Title is too long</div>}
    </div>
}