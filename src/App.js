import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

import Navbar from './components/Navbar/Navbar';
import EditTodoForm from './components/EditTodoForm/EditTodoForm';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Redirect to="/todo/list"/>
      <Switch>
        <Route 
          exact
          path="/todo/list"
          component={TodoList}
        />
        <Route 
          exact
          path="/todo/form"
          component={TodoForm}
        />
        <Route
          exact
          path="/todo/edit/:id"
          component={EditTodoForm}
        />
      </Switch>
    </div>
  );
}

export default App;
