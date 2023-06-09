import React from 'react';
import {Todo} from '../types';

interface TodoItemProps extends Todo {
    style?: React.CSSProperties,
    toggleTodo: (id: Todo['id']) => void,
    removeTodo: (id: Todo['id']) => void,
}

const TodoItem = ({ id, title, completed, removeTodo, toggleTodo, style = {} }: TodoItemProps) => {
  return (
    <li style={style}>
      <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)}/>
      <span>{title}</span>
      <span onClick={() => removeTodo(id)}>&times;</span>
    </li>
  );
}

export default TodoItem;
