import {FilterType} from "../App.tsx";
import {Box, Button} from "@mui/material";
import {boxSx} from "../styles/Todo.styles.tsx";

type FilterButtonsPropsType = {
    changeTodolistFilter: (newFilterValue: FilterType) => void
    activeFilter: FilterType
}

export const FilterButtons = ({changeTodolistFilter, activeFilter}: FilterButtonsPropsType) => {
    return (
        <Box sx={boxSx}>
            <Button color={activeFilter === 'all' ? 'secondary' : 'primary'}
                    onClick={() => changeTodolistFilter('all')}
                    variant='contained'
                    size='small'
                    disableElevation
            >
                All
            </Button>
            <Button color={activeFilter === 'active' ? 'secondary' : 'primary'}
                    onClick={() => changeTodolistFilter('active')}
                    variant='contained'
                    size='small'
                    disableElevation
            >
                Active
            </Button>
            <Button color={activeFilter === 'completed' ? 'secondary' : 'primary'}
                    onClick={() => changeTodolistFilter('completed')}
                    variant='contained'
                    size='small'
                    disableElevation
            >
                Completed
            </Button>
        </Box>
    )
}