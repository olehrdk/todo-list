import React from 'react';
import TodoListItem from '../todo-list-item';
import  './todo-list.css';

const TodoList = ({ todos, filter, onDeleted, onToggleImportant, onToggleDone }) => {
  let label;
  if (todos.length === 0) {
    switch (filter) {
      case 'all': {
        label = 'No todos. Add task ?';
        break;
      } case 'active': {
        label = 'No active todos. Add task ?';
        break;
      } case 'done': {
        label = 'You haven\'t done anything yet';
        break;
      } default: {
        label = 'No todos. Add task ?'
      }
    }
  }
  
  const elements = todos.map((item) => {

    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    )
  });

  return (
    <ul className="list-group todo-list">
      {elements}
      {label}
    </ul>
  );
}
 
export default TodoList;