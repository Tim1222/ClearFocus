import './styles/App.css'
import {TodolistItem} from "./Components/TodolistItem.tsx";
import {useState} from "react";
import {v1} from "uuid";
import {AddItemForm} from "./Components/AddItemForm.tsx";
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import {Box, Container, CssBaseline, Grid, Paper, Switch} from '@mui/material';
import {boxSx} from "./styles/Todo.styles.tsx";
import {NavButton} from "./Components/NavButton.tsx";
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {amber, green} from "@mui/material/colors";


export type FilterType = 'all' | 'active' | 'completed'
export type TodolistType = {
    id: string
    title: string
    filter: FilterType
}
const todolistId_1: string = v1()
const todolistId_2: string = v1()

export type TaskStateType = {
    [todolistId: string]: TaskType[]
}
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

function App() {

    const [todolists, setTodolists] = useState<TodolistType[]>([
        {id: todolistId_1, title: 'What to learn', filter: 'all'},
        {id: todolistId_2, title: 'What to Buy', filter: 'all'},
    ])

    const [tasks, setTasks] = useState<TaskStateType>({
        [todolistId_1]: [
            {id: v1(), title: 'HTML', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'React', isDone: false},
            {id: v1(), title: 'TS', isDone: false}
        ],
        [todolistId_2]: [
            {id: v1(), title: 'Water', isDone: true},
            {id: v1(), title: 'Bread', isDone: true},
            {id: v1(), title: 'Milk', isDone: false},
            {id: v1(), title: 'Meat', isDone: false},
        ]
    })


    const deleteTask = (taskId: string, todolistId: string) => {
        // const todolistTasks: TaskType[] = tasks[todolistId]
        // const filteredTasks: TaskType[] = todolistTasks.filter(t => t.id !== taskId)
        // const newState: TaskStateType = {...tasks, [todolistId]: filteredTasks}
        // setTasks(newState)
        setTasks({...tasks, [todolistId]: tasks[todolistId].filter(t => t.id !== taskId)})

        //setTasks(tasks.filter(t => t.id !== taskId))
    }
    const createTask = (title: string, todolistId: string) => {
        setTasks({...tasks, [todolistId]: [...tasks[todolistId], {id: v1().toString(), title, isDone: false}]})
    }
    const changeTaskStatus = (taskId: string, isDone: boolean, todolistId: string) => {
        setTasks({
            ...tasks, [todolistId]: [...tasks[todolistId].map(t => t.id === taskId ? {...t, isDone: isDone} : t)]
        })

        //setTasks(newState)
    }
    const changeTasksTitle = (taskId: string, newTitle: string, todolistId: string) => {
        setTasks({
            ...tasks, [todolistId]: [...tasks[todolistId].map(t => t.id === taskId ? {...t, title: newTitle} : t)]
        })
    }

    const changeTodolistFilter = (newFilterValue: FilterType, todolistId: string) => {
        setTodolists(todolists.map(tl => tl.id === todolistId ? {...tl, filter: newFilterValue} : tl))
    }
    const deleteTodolist = (todolistId: string) => {
        setTodolists(todolists.filter(tl => tl.id !== todolistId))
        delete tasks[todolistId]
    }
    const createTodolisis = (title: string) => {
        const newTodolistId = v1()
        setTodolists([{id: newTodolistId, title, filter: 'all'}, ...todolists])
        setTasks({...tasks, [newTodolistId]: []})
    }
    const changeTodolistTitle = (newTitle: string, todolistId: string) => {
        setTodolists(todolists.map(tl => tl.id === todolistId ? {...tl, title: newTitle} : tl))
    }

    const todolistComponents = todolists.map(tl => {

        let filteredTasks: TaskType[] = tasks[tl.id]
        if (tl.filter === 'active') {
            filteredTasks = tasks[tl.id].filter(t => !t.isDone)
        }
        if (tl.filter === 'completed') {
            filteredTasks = tasks[tl.id].filter(t => t.isDone)
        }

        return (
            <Grid key={tl.id}>
                <Paper elevation={8}>
                    <TodolistItem
                        key={tl.id}
                        id={tl.id}
                        title={tl.title}
                        activeFilter={tl.filter}
                        task={filteredTasks}
                        changeTasksTitle={changeTasksTitle}

                        deleteTask={deleteTask}
                        changeTodolistFilter={changeTodolistFilter}
                        createTask={createTask}
                        changeTaskStatus={changeTaskStatus}
                        deleteTodolist={deleteTodolist}
                        changeTodolistTitle={changeTodolistTitle}
                    />
                </Paper>
            </Grid>
        )
    })
    const [isLight, setIsLigt] = useState(true)
    const myTheme = createTheme({
        palette: {
            primary: green,
            secondary: amber,
            mode: isLight ? 'light' : 'dark'
        },
    })


    return (
        <div className="app">
            <ThemeProvider theme={myTheme}>
                <CssBaseline/>
                <AppBar position='static'>
                    <Toolbar>
                        <Box sx={boxSx}>
                            <IconButton color="inherit">
                                <MenuIcon/>
                            </IconButton>
                            <Box>
                                <Switch onChange={()=> setIsLigt(!isLight)}/>
                                <NavButton>Sign in</NavButton>
                                <NavButton>Sign out</NavButton>
                                <NavButton background={myTheme.palette.primary.light}>FAQ</NavButton>
                            </Box>
                        </Box>
                    </Toolbar>
                </AppBar>

                <Container maxWidth='lg'>
                    <Grid container sx={{padding: '15px 0'}}>
                        <AddItemForm
                            createItem={createTodolisis}
                            maxTitleLengs={15}/>
                    </Grid>
                    <Grid container spacing={2} rowSpacing={2}>
                        {todolistComponents}
                    </Grid>
                </Container>
            </ThemeProvider>
        </div>
    )
}

export default App