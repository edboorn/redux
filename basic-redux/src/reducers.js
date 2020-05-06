// Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.

// Redux stores all application state in a single object

import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
} from "./actions";

const initialState = {
  VisibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: [],
};

// Old way of writing this function
// function todoApp (state, action) {
//     if(typeof state === 'undefined') {
//         return initialState
//     }
//     // For now, don't hanle any actions and just return the state given to us
//     return state
// }

// New way of writing this function
function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      // Use Object.assign to copy state rather than mutating the initial state
      return Object.assign({}, state, {
        VisibilityFilter: action.filter,
      });
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false,
          },
        ],
      });
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed,
            });
          }
          return todo;
        }),
      });
    default:
      return state;
  }
}
