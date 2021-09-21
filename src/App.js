import React from 'react'
import {
  HashRouter,
  Switch,
  Route
} from 'react-router-dom'
import TodosContextProvider from './contexts/TodosContext'
import Main from './pages/Main'
import Login from './pages/Login'

function App() {
  return (
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <TodosContextProvider>
              <Main />
            </TodosContextProvider>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </HashRouter>
  );
}

export default App;
