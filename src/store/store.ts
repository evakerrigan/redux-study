import { createStore, type Store, combineReducers } from 'redux';
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { todosReducer } from '../features/todos/store/reducer';

export type RootState = {
  todos: ReturnType<typeof todosReducer>;
};

const rootReducer = combineReducers({
  todos: todosReducer,
});

export const store: Store<RootState> = createStore(rootReducer);

// Infer the `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

console.log(store.getState());
