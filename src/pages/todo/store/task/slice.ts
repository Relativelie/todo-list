import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type State = {
  tasks: { [key: string]: any };
  filteredTasks: { [key: string]: any };
  lastTaskId: number;
  activeFilter: 'all' | 'active' | 'completed';
};

type Reducers = {
  addTask: (state: State, action: PayloadAction<string>) => void;
  completedTask: (state: State, action: PayloadAction<number>) => void;
  removeCompletedTasks: (state: State) => void;
  setFilteredTasks: (
    state: State,
    action: PayloadAction<'all' | 'active' | 'completed'>
  ) => void;
};
const taskSlice = createSlice<State, Reducers>({
  name: 'todo/task',
  initialState: {
    tasks: {},
    filteredTasks: {},
    lastTaskId: 0,
    activeFilter: 'all',
  } as State,
  reducers: {
    addTask(state, action) {
      const allTasks = { ...state.tasks };
      allTasks[state.lastTaskId] = {
        title: action.payload,
        status: 'active',
      };
      state.tasks = allTasks;
      const curId = state.lastTaskId;
      state.lastTaskId = curId + 1;
    },
    completedTask(state, action) {
      const allTasks = { ...state.tasks };
      allTasks[action.payload].status = 'completed';
      state.tasks = allTasks;
    },
    removeCompletedTasks(state) {
      const allTasks = { ...state.tasks };
      Object.keys(allTasks).forEach((el) => {
        if (allTasks[el].status === 'completed') {
          delete allTasks[el];
        }
      });
      state.tasks = allTasks;
    },
    setFilteredTasks(state, action) {
      const allTasks = { ...state.tasks };
      if (action.payload !== 'all') {
        Object.keys(allTasks).forEach((key) => {
            if (allTasks[key].status !== action.payload) {
              delete allTasks[key];
            }
          });
      }
      state.filteredTasks = { ...allTasks };
      state.activeFilter = action.payload;
    },
  },
});

const taskReducer = taskSlice.reducer;
export const {
  addTask,
  completedTask,
  removeCompletedTasks,
  setFilteredTasks,
} = taskSlice.actions;
export default taskReducer;
