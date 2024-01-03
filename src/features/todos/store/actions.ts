export const addTodo = (text: string) => ({
  type: 'ADD_TODO',
  payload: text,
});

export const removeTodo = (id: string) => ({
  type: 'REMOVE_TODO',
  payload: id,
});

export const toggleTodo = (id: string) => ({
  type: 'TOGGLE_TODO',
  payload: id,
});
