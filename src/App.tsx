import { ThemeProvider } from "@mui/material"
import { BrowserRouter as Router } from "react-router-dom"
import { AppRoutes } from "./routes"
import { LightTheme } from "./shared/themes"

export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Router>
        <AppRoutes />
      </Router>    
    </ThemeProvider>
  )
}
