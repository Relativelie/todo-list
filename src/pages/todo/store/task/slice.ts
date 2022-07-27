import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type State = {
  tasks: { [key: string]: any };
  filteredTasks: { [key: string]: any };
  lastTaskId: number;
};

type Reducers = {
  addTask: (state: State, action: PayloadAction<string>) => void;
  completedTask: (state: State, action: PayloadAction<number>) => void;
  removeCompletedTasks: (state: State) => void;
  setFilteredTasks: (state: State, action: PayloadAction<any>) => void;
};
const taskSlice = createSlice<State, Reducers>({
  name: 'todo/task',
  initialState: {
    tasks: {},
    filteredTasks: {},
    lastTaskId: 0,
  } as State,
  reducers: {
    addTask(state, action) {
      state.tasks = {
        ...state.tasks,
        [state.lastTaskId]: {
            title: action.payload,
            status: 'active',
        },
      };
      state.lastTaskId = state.lastTaskId++;
    },
    completedTask(state, action) {
        const allTasks = { ...state.tasks };
        allTasks[action.payload].status = 'completed';
        state.tasks = allTasks;
    },
    removeCompletedTasks(state) {
        const allTasks = { ...state.tasks };
        Object.keys(allTasks).forEach((el) => {
            if (allTasks.el.status === 'completed') {
                delete allTasks[el];
            }
        });
        state.tasks = allTasks;
    },
    setFilteredTasks(state, action) {
        state.filteredTasks = { ...action.payload };
    },
  },
});

const taskReducer = taskSlice.reducer;
export const { addTask, completedTask, removeCompletedTasks, setFilteredTasks } = taskSlice.actions;
export default taskReducer;
