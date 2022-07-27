import { createSelector } from '@reduxjs/toolkit';
import { todoStateSelector } from '../selectors';

export const tasksSelector = createSelector(
  todoStateSelector,
  (state) => state.todo.task.tasks,
);

export const filteredTasksSelector = createSelector(
  todoStateSelector,
  (state) => state.todo.task.filteredTasks,
);

export const activeFilterSelector = createSelector(
  todoStateSelector,
  (state) => state.todo.task.activeFilter,
);
