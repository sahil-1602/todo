import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  return (
    <div className="App">
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
      </Switch>
    </div>
  );
}

export default App;
