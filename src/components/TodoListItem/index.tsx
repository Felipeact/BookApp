import React from 'react';

import { Container } from './styles';

interface Props { 
  todo: Todo;
  toggleTodo: ToggleTodo;
}

const TodoListItem: React.FC<Props> = ({todo, toggleTodo}) => {
  return (
    <Container>
      <li>
      <label
        style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
      >
        <input type="hidden" checked={todo.complete} onClick={()=> {toggleTodo(todo)}} />{''} {todo.text}
      </label>
    </li>
    </Container>
  );
};

export default TodoListItem;
