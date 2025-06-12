import {useState} from "react";

type AddTaskFormPropsType = {
    createTask: (title: string) => void
}

export const AddtaskForm = ({createTask}: AddTaskFormPropsType) => {

    //const inputRef = useRef<HTMLInputElement>(null)
    const [taskInput, setTaskInput] = useState('')

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
            onChange={(e) => {
            setTaskInput(e.currentTarget.value)
            console.log(taskInput)}}/>
        <button
            disabled={!taskInput || taskInput.length > 10}
            onClick={() => {
            createTask(taskInput)
            setTaskInput('')
        }}>+
        </button>
        {taskInput && <div>Max title 10 element</div>}
        {taskInput.length > 10 && <div style={{color: 'red'}}>Title is too long</div>}
    </div>
}