import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  DELETED,
  SELECTEDCOLOR,
  TOGGLED,
} from "./actionTypes";
import { initialState } from "./initialState";

const nextTodoId = (todos) => {
  const maxID = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);

  // If an initialValue is provided, maxID is set to initialValue, and reduce() starts iterating from the first element.
  // If initialValue is not provided, maxID is set to the first element, and reduce() starts iterating from the second element.

  return maxID + 1;
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
      ];

    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        //
        return {
          ...todo,
          completed: !todo.completed,
        };
      });

    case SELECTEDCOLOR:
      // const { todoId, color } = action.payload;
      return state.map((todo) => {
        if (todo.id !== action.payload.todoId) {
          return todo;
        }
        //
        return {
          ...todo,
          color: action.payload.color,
        };
      });

    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);

    case ALLCOMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    case CLEARCOMPLETED:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};

export default todosReducer;
