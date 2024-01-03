import { FC } from 'react';
import { useSelector } from 'react-redux';

import styles from './TodosList.module.css';

import { TodosListItem } from '../TodosListItem';
import { Todo } from '../../types';
import { RootState } from '@/store/store';

export const TodosList: FC = () => {
  const todos: Todo[] = useSelector((state: RootState) => state.todos.todos);

  console.log('todos = ', todos);

  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <TodosListItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
