import React from 'react';

// list type 
export interface ListComponent {
   className : string,
   children: React.ReactNode,
};


// todolist props type
export interface TodoAppProps {
   children: React.ReactNode,
   value: TodoAppProps[]
}

// provider props type 
export interface ProviderProps {
   children: React.ReactNode,
   value: any
};
