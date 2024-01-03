import { FC } from 'react';
import { useSelector } from 'react-redux';

import styles from './TodosList.module.css';

import { TodosListItem } from '../TodosListItem';

export const TodosList: FC = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <TodosListItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
