import {ChangeEvent, KeyboardEvent, useState} from "react";

type AddTaskFormPropsType = {
    createTask: (title: string) => void
    maxTitleLengs: number

}

export const AddtaskForm = ({createTask, maxTitleLengs}: AddTaskFormPropsType) => {

    //const inputRef = useRef<HTMLInputElement>(null)
    const [taskInput, setTaskInput] = useState('')
    const [error, setError] = useState(false)


    const CreateTaskHandler = () => {
        const trimmedTitle = taskInput.trim()
        if (trimmedTitle) {
            createTask(trimmedTitle)
        } else {
            setError(true)
        }
        setTaskInput('')
    }
    const DisableBtn = !taskInput || taskInput.length > maxTitleLengs
    const OnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        error && setError(false)
        setTaskInput(e.currentTarget.value)
        //console.log(taskInput)
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
            placeholder={`Max title ${maxTitleLengs} element`}
            value={taskInput}
            onKeyDown={OnKeyTaskHandler}
            onChange={OnChangeHandler}
            className={error ? 'error' : ''}/>
        <button
            disabled={DisableBtn}
            onClick={CreateTaskHandler}>
            +
        </button>

        {taskInput && <div>{`Max title ${maxTitleLengs} element`}</div>}
        {taskInput.length > 10 && <div style={{color: 'red'}}>Title is too long</div>}
        {error && <div style={{color: 'red'}}>Enter valid title</div>}

    </div>
}