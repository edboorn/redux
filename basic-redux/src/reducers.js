// Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.

// Redux stores all application state in a single object
import { combineReducers } from "redux";
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
} from "./actions";
const { SHOW_ALL } = VisibilityFilters;

// const initialState = {
//     visibilityFilter: VisibilityFilters.SHOW_ALL,
//     todos: []
//   }

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state;
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

// Each part of the state has its own reducer controlling it
// You could seperate each reducer into its own file to keep the independant
const todoApp = combineReducers({
  visibilityFilter,
  todos,
});

export default todoApp;
