import React from 'react';
import './app-header.css'

const AppHeader = ({ toDo, done }) => {
   return (
      <div className="d-flex app-header">
         <h1>TODO List</h1>
         <h2>{toDo} more to do, { done } done</h2>
      </div>
   );
}
 
export default AppHeader;