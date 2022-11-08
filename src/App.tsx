import { BrowserRouter as Router, Route } from "react-router-dom"
import { AppRoutes } from "./routes"

export const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>    
  )
}
