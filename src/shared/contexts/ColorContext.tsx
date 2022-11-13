import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import React, { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react";
import { DarkTheme, LightTheme } from './../themes'

interface IColorContextData {
    colorName: 'light' | 'dark'
    toggleColor: () => void
}
interface IChildren {
    children: ReactNode
}

const ColorContext = createContext({} as IColorContextData)

export const useAppThemeConstext = () => {
    return useContext(ColorContext)
}

export const ColorProvider = ({ children }: IChildren) => {
const [colorName, setColorsTheme] = useState<'light' | 'dark'>('dark')

const toggleColor = useCallback(() => {
    setColorsTheme(oldTheme => oldTheme === 'light' ? 'dark' : 'light')
}, [])

const theme = useMemo(() => {
    return (colorName === 'light') ? LightTheme : DarkTheme
}, [colorName])

    return (
        <ColorContext.Provider value={{ colorName, toggleColor }}>
            <ThemeProvider theme={theme}>
                <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>
        </ColorContext.Provider>
    )
}