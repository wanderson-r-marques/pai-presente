import { createTheme } from '@mui/material'

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: '#1F4E9E',
            dark: '#003b9b',
            light: '#5078ba',
            contrastText: '#fff',
        },
        secondary: {
            main: '#ED4E23',
            dark: '#e02c00',
            light: '#ff967c',
            contrastText: '#fff',
        },
        background: {
            default: '#F9E712',
            paper: '#fff'
        }
    }
})