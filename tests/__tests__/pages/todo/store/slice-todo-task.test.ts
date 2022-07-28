import taskReducer from "../../../../../src/pages/todo/store/task/slice";
import {
    addTask,
    toCompleteTask,
    removeCompletedTasks,
    setFilteredTasks,
} from '../../../../../src/pages/todo/store/task/slice';


let state: any;
beforeEach(() => {
    state = {
        tasks: {0: {status: "completed", title: "lala"}, 1: {status: "active", title: "lala active"}},
        filteredTasks: {0: {status: "completed", title: "lala"}, 1: {status: "active", title: "lala active"}},
        lastTaskId: 2,
        activeFilter: "all",
    };
});

describe('Todo/task slice', () => {
    test('Todo/task slice - add task', () => {
        const newState = taskReducer(
            state,
            addTask('new task'),
        );
        expect(newState).toStrictEqual({
            ...state,
            tasks: {...state.tasks, 2: {status: "active", title: "new task"}},
            lastTaskId: 3,
        });
    });

    test('Todo/task slice - remove task', () => {
        const newState = taskReducer(
            state,
            removeCompletedTasks(),
        );
        expect(newState).toStrictEqual({
            ...state,
            tasks: {1: {status: "active", title: "lala active"}},
        });
    });

    test('Todo/task slice - filter task - active', () => {
        const newState = taskReducer(
            state,
            setFilteredTasks("active"),
        );
        expect(newState).toStrictEqual({
            ...state,
            filteredTasks: {1: {status: "active", title: "lala active"}},
            activeFilter: "active"
        });
    });

    test('Todo/task slice - filter task - completed', () => {
        const newState = taskReducer(
            state,
            setFilteredTasks("completed"),
        );
        expect(newState).toStrictEqual({
            ...state,
            filteredTasks: {0: {status: "completed", title: "lala"}},
            activeFilter: "completed"
        });
    });
    
    test('Todo/task slice - filter task - all', () => {
        const newState = taskReducer(
            state,
            setFilteredTasks("all"),
        );
        expect(newState).toStrictEqual({
            ...state,
        });
    });

    test('Todo/task slice - complete task', () => {
        const newState = taskReducer(
            state,
            toCompleteTask(1),
        );
        expect(newState).toStrictEqual({
            ...state,
            tasks: {0: {status: "completed", title: "lala"}, 1: {status: "completed", title: "lala active"}},
        });
    });
});
