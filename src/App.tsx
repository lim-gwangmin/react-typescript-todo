import React from 'react';

function App() {
  return (
   <div id="app">
      <section className="todoapp">
         <header className="header">
            <h1>todos</h1>
            <input className="new-todo" placeholder="What needs to be done?"/>
         </header>
         <section className="main">
            <input id="toggle-all"className="toggle-all" type="checkbox"/>
            <label 
            // for="toggle-all"
            >Mark all as complete</label>
            <ul className="todo-list">
               <li className='completed'>
                     <div className="view">
                        <input className="toggle" type="checkbox" 
                        // checked='checked'
                        />
                        <label>테스트 텍스트 1</label>
                        <button className="destroy"/>
                     </div>
                     <input className="edit" value="Create a TodoMVC template" />
               </li>
               <li className=''>
                     <div className="view">
                        <input className="toggle" type="checkbox"/>
                        <label>테스트 텍스트 2</label>
                        <button className="destroy"/>
                     </div>
                     <input className="edit" value="Create a TodoMVC template" />
               </li>
            </ul>
         </section>
         <footer className="footer">
            <span className="todo-count">
               <strong>
                     2
               </strong>
               item left
            </span>
            <ul className="filters">
               <li>
                     <a className="selected" href="#/">All</a>
               </li>
               <li>
                     <a href="#/active">Active</a>
               </li>
               <li>
                     <a href="#/completed">Completed</a>
               </li>
            </ul>
            <button className="clear-completed">Clear completed</button>
         </footer>
      </section>
      <footer className="info">
         <p>Double-click to edit a todo</p>
         <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
         <p>Created by <a href="http://todomvc.com">you</a></p>
         <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
   </div>
  );
}

export default App;
