import {Route, Switch} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import NotFound from './components/NotFound'
import CourseItemDetails from './components/CourseItemDetails'

// Replace your code hereCo
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/courses/:id" component={CourseItemDetails} />
    <Route component={NotFound} />
  </Switch>
)

export default App
