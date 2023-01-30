import './App.css'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={TeamMatches} />
      <Home />
    </Switch>
  </>
)

export default App
