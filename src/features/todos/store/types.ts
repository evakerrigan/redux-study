import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './constants';

interface addTodo {
  type: typeof ADD_TODO;
}

interface RemoveTodo {
  type: typeof REMOVE_TODO;
}

interface toggleTodo {
  type: typeof TOGGLE_TODO;
}

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type TodosState = {
  todos: Todo[];
};
export type TodosAction = addTodo | RemoveTodo | toggleTodo;
