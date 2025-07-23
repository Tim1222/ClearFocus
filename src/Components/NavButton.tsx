import {styled} from '@mui/material/styles'
import Button from '@mui/material/Button'


type Props = {
    background?: string
}

export const NavButton = styled(Button)<Props>(({background, theme}) => ({
    minWidth: '110px',
    fontWeight: 'bold',
    boxShadow: `0 0 0 1px ${theme.palette.primary.dark}, 2px 2px 0 0 ${theme.palette.primary.dark}`,
    borderRadius: '2px',
    textTransform: 'capitalize',
    margin: '0 10px',
    padding: '8px 24px',
    color: theme.palette.primary.contrastText,
    background: background || theme.palette.primary.main,
}))