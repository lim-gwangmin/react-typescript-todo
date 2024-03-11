import React from 'react';

function FilterItem() {
   return (
      <>
         <li>
            <a className="selected" href="#/">All</a>
         </li>
         <li>
            <a href="#/active">Active</a>
         </li>
         <li>
            <a href="#/completed">Completed</a>
         </li>
      </>
   )
};


export default FilterItem;