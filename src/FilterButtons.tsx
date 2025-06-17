import {FilterType} from "./App";

type FilterButtonsPropsType = {
    changeTodolistFilter: (newFilterValue: FilterType) => void
    activeFilter: FilterType
}

export const FilterButtons = ({changeTodolistFilter, activeFilter}: FilterButtonsPropsType) => {
    return <div>
        <button className={activeFilter === 'all' ? 'btn-filter-active' : ''}
                onClick={() => changeTodolistFilter('all')}>All
        </button>
        <button className={activeFilter === 'active' ? 'btn-filter-active' : ''}
                onClick={() => changeTodolistFilter('active')}>Active
        </button>
        <button className={activeFilter === 'completed' ? 'btn-filter-active' : ''}
                onClick={() => changeTodolistFilter('completed')}>Completed
        </button>
    </div>
}