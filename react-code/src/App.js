import React from 'react';
import TodoList from './containers/TodoList';

function App() {
  return (
    <div className="app-container" title = 'Faye' data-test = 'container'>
      <TodoList/>
    </div>
  );
}

export default App;
