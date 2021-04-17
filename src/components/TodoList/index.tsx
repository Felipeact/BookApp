import React from 'react';
import TodoListItem from '../TodoListItem';

import { Container } from './styles';

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

const TodoList: React.FC<Props> = ({todos, toggleTodo}) => {
  return (
    <Container>
      <ul>
        {todos.map(todo => (
          <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </ul>

      
    </Container>
  );
};

export default TodoList;
