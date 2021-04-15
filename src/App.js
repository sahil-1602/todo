import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

import Navbar from './components/Navbar/Navbar';
import EditTodoForm from './components/EditTodoForm/EditTodoForm';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route 
          exact
          path="/"
          component={TodoList}
        />
        <Route 
          exact
          path="/form"
          component={TodoForm}
        />
        <Route
          exact
          path="/edit/:id"
          component={EditTodoForm}
        />
      </Switch>
    </div>
  );
}

export default App;
