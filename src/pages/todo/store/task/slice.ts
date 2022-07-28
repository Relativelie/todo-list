import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type State = {
  tasks: {
    [key: string]: {
      status: string;
      title: string;
    };
  };
  filteredTasks: {
    [key: string]: {
      status: string;
      title: string;
    };
  };
  lastTaskId: number;
  activeFilter: 'all' | 'active' | 'completed';
};

type Reducers = {
  addTask: (state: State, action: PayloadAction<string>) => void;
  toCompleteTask: (state: State, action: PayloadAction<number>) => void;
  removeCompletedTasks: (state: State) => void;
  setFilteredTasks: (
    state: State,
    action: PayloadAction<'all' | 'active' | 'completed' | undefined>
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
    toCompleteTask(state, action) {
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
      const filter = action.payload === undefined ? state.activeFilter : action.payload;
      if (filter !== 'all') {
        Object.keys(allTasks).forEach((key) => {
          if (allTasks[key].status !== filter) {
            delete allTasks[key];
          }
        });
      }
      state.filteredTasks = { ...allTasks };
      state.activeFilter = filter;
    },
  },
});

const taskReducer = taskSlice.reducer;
export const {
  addTask,
  toCompleteTask,
  removeCompletedTasks,
  setFilteredTasks,
} = taskSlice.actions;
export default taskReducer;
