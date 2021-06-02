import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Home from './containers/home/Home'
import Create from './containers/create/Create'
import Detail from './containers/detail/Detail'
import Menu from './components/menu/Menu'
import Remove from './containers/remove/Remove'
import NotFound from './containers/not-found/NotFound'
import Edit from './containers/edit/Edit'
import ContextLoginManager from './ContextLoginManager'
import ContextProductManager from './ContextProductManager'
import Login from './containers/login/Login'
import PrivateRoute from './components/private-router/PrivateRouter'

function App() {
  return (
    <ContextLoginManager>
      <ContextProductManager>
        <Router>
          <Menu />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Login />
              </Route>
              <Route exact path="/list">
                <Home />
              </Route>
              <PrivateRoute path="/create" component={Create} />
              <PrivateRoute path="/remove/:id" component={Remove} />
              <PrivateRoute path="/edit/:id" component={Edit} />
              <Route path="/detail/:id">
                <Detail />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </Router>
      </ContextProductManager>
    </ContextLoginManager>
  );
}

export default App
