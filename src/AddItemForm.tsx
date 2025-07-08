import {ChangeEvent, KeyboardEvent, useState} from "react";

type AddItemFormPropsType = {
    createItem: (title: string) => void
    maxTitleLengs: number

}

export const AddItemForm = ({createItem, maxTitleLengs}: AddItemFormPropsType) => {

    //const inputRef = useRef<HTMLInputElement>(null)
    const [itemInput, setItemInput] = useState('')
    const [error, setError] = useState(false)


    const CreateItemHandler = () => {
        const trimmedTitle = itemInput.trim()
        if (trimmedTitle) {
            createItem(trimmedTitle)
        } else {
            setError(true)
        }
        setItemInput('')
    }
    const DisableBtn = !itemInput || itemInput.length > maxTitleLengs
    const OnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        error && setError(false)
        setItemInput(e.currentTarget.value)
        //console.log(itemInput)
    }
    const OnKeyTaskHandler = (e: KeyboardEvent<HTMLInputElement>) => {

        if (e.key === 'Enter' && !DisableBtn) {
            CreateItemHandler()
        }

    }

    return <div>

        <input
            placeholder={`Max title ${maxTitleLengs} element`}
            value={itemInput}
            onKeyDown={OnKeyTaskHandler}
            onChange={OnChangeHandler}
            className={error ? 'error' : ''}/>
        <button
            disabled={DisableBtn}
            onClick={CreateItemHandler}>
            +
        </button>

        {itemInput && <div>{`Max title ${maxTitleLengs} element`}</div>}
        {itemInput.length > maxTitleLengs && <div style={{color: 'red'}}>Title is too long</div>}
        {error && <div style={{color: 'red'}}>Enter valid title</div>}

    </div>
}