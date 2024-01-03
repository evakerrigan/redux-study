import { FC } from 'react';

import { useAppDispatch } from '../../store';
import { removeTodo, toggleTodo } from '../../store/actions';

import styles from './TodosListItem.module.css';

//import { ButtonRemove } from '../../../components/ButtonRemove';
import { ButtonRemove } from '../../../components/ButtonRemove/ButtonRemove.tsx';
import { Todo } from '../../types';

type Props = {
  todo: Todo;
};

export const TodosListItem: FC<Props> = ({ todo: { id, text, completed } }) => {
  const dispatch = useAppDispatch();

  const completedClass = completed ? styles.todoTextThrough : '';

  const handleChange = () => {
    console.log(`toggleTodoCompleted: ${id}`);
    dispatch(toggleTodo(id));
  };

  const handleRemove = () => {
    console.log(`removeTodo: ${id}`);
    dispatch(removeTodo(id));
  };

  return (
    <div className={styles.todoRow}>
      <div className={styles.todoInputWrapper}>
        <input
          checked={completed}
          onChange={handleChange}
          type="checkbox"
          className={styles.todoInput}
        />
      </div>
      <div className={`${styles.todoText} ${completedClass}`}>{text}</div>
      <ButtonRemove onCLick={handleRemove} />
    </div>
  );
};
