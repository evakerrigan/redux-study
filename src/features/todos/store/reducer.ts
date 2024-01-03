import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './constants';
import { TodosAction, TodosState } from './types';

const initialState = {
  todos: [
    {
      id: 'c1a69b93-d3cb-49da-b736-87accbc7852f',
      text: 'Understand What React Is',
      completed: true,
    },
    {
      id: 'b69ab839-0999-4bc6-a99c-ccc011be6ef3',
      text: 'Learn How to Set Up your Development Environment',
      completed: false,
    },
  ],
};

export const todosReducer = (state: TodosState = initialState, action: TodosAction): TodosState => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, { id: action.payload, text: action.payload, completed: false }],
      };
    }

    case REMOVE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    }

    case TOGGLE_TODO: {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    }

    default: {
      return state;
    }
  }
};
