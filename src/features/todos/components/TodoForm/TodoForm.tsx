import { FC, useState } from 'react';

import styles from './TodoForm.module.css';

//import { Button } from '../../../components/Button';
//import { Button } from '@/components/Button';
//import { Button } from '@/components/Button/Button.tsx';

import { useAppDispatch } from '@/store/store';
import { addTodo } from '../../store/actions';

export const TodoForm: FC = () => {
  const [text, setText] = useState('');

  const dispatch = useAppDispatch();

  const handleClick = (): void => {
    const trimmedValue = text.trim();

    if (trimmedValue) {
      console.log('Add new todo:', trimmedValue);
      setText('');
    }

    dispatch(addTodo(trimmedValue));
  };

  return (
    <form className={styles.formWrapper}>
      <div className={styles.formInputWrapper}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={styles.formInput}
          type="text"
          placeholder="Add your new todo"
          aria-label="Add your new todo"
        />
        <Button onCLick={handleClick}>Add new</Button>
      </div>
    </form>
  );
};
