import React from 'react';
import { TodoApp } from 'component/templates';

function App() {
  return (
   <TodoApp value={[]}>
      <TodoApp.Header/>
      <TodoApp.Main/>
      <TodoApp.Footer/>
   </TodoApp>
  );
};

export default App;
