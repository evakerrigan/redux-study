//import { useAppSelector } from '../../store';
import { useAppSelector } from '@store/store';

export const useTodos = () => {
  return useAppSelector((state) => state.todos);
};
