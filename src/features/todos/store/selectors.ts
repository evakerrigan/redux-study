import { useAppSelector } from '../../store';

export const useTodos = () => {
  return useAppSelector((state) => state.todos);
};
