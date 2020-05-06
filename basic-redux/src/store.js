// Store holds the application state. Brings together the actions and reducers.

import { createStore } from "redux";
import todoApp from "./reducers";
const store = createStore(todoApp);

