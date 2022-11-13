import { Button } from "@mui/material"
import { Routes, Route, Navigate } from "react-router-dom"
import { useAppThemeConstext } from "../shared/contexts"

export const AppRoutes = () => { 
    const { toggleColor } = useAppThemeConstext()
    return(
        <Routes>
            <Route path="/inicio" element={<Button variant="contained" color="primary" onClick={toggleColor}>Teste</Button>} />
            <Route path="*" element={<Navigate to="/inicio" />} />
        </Routes>
    )
}