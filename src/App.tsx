import { BrowserRouter as Router } from "react-router-dom"
import { AppRoutes } from "./routes"
import { ColorProvider } from './shared/contexts'

export const App = () => {
  return (
    
    <ColorProvider>
      <Router>
          <AppRoutes />
        </Router>
    </ColorProvider>
        
     
    
  )
}
