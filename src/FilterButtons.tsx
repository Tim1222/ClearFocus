import {FilterType} from "./App";

type FilterButtonsPropsType = {
    changeTodolistFilter: (newFilterValue: FilterType) => void
}

export const FilterButtons = ({changeTodolistFilter}: FilterButtonsPropsType) => {
    return <div>
        <button onClick={()=> changeTodolistFilter('all')}>All</button>
        <button onClick={()=> changeTodolistFilter('active')}>Active</button>
        <button onClick={()=> changeTodolistFilter('completed')}>Completed</button>
    </div>
}