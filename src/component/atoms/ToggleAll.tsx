import React from 'react';

function ToggleAll() {
   return (
      <>
         <input id="toggle-all"className="toggle-all" type="checkbox"/>
         <label 
         // for="toggle-all"
         >
            Mark all as complete
         </label>
      </>
   )
};

export default ToggleAll;