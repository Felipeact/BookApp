interface ModalCash {
  name: string;
  dolar: number;
}

interface Todo {
  text: string;
  complete: boolean;
}


type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (text: string) => void;
//In types.ts we will define constants for user authentication and UI loading purpose

