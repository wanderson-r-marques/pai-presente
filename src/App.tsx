import { BrowserRouter as Router } from "react-router-dom"
import { AppRoutes } from "./routes"
import { NavBar } from "./shared/components"
import { ColorProvider } from './shared/contexts'

export const App = () => {
  return (
    
    <ColorProvider>
      <Router>
        <NavBar>          
          <AppRoutes />
        </NavBar>
      </Router>
    </ColorProvider>
        
     
    
  )
}
