import React, { ReactNode } from 'react';

interface ListComponent {
   className : string,
   children: ReactNode,
}

function List({ className , children }: ListComponent) {
   return (
      <ul className={className}>
         { children }
      </ul>
   )
};

export default List;