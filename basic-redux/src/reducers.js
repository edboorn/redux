// Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.

// Redux stores all application state in a single object

import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
} from "./actions";
const {SHOW_ALL} = VisibilityFilters


// Old way of writing this function
// function todoApp (state, action) {
//     if(typeof state === 'undefined') {
//         return initialState
//     }
//     // For now, don't hanle any actions and just return the state given to us
//     return state
// }

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
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed,
          });
        }
      });
    default:
      return state;
  }
}

function VisibilityFilter(state = SHOW_ALL,action) {
    switch(action.type){
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}
// New way of writing this function
function todoApp(state = {}, action) {
    return {
        VisibilityFilter : VisibilityFilter(state.VisibilityFilter,action),
        todos: todos(state.todos,action)
    }
}
