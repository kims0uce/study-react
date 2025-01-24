import { combineReducers, configureStore, Middleware } from "@reduxjs/toolkit";
import TodoReducer, { TodoStatesType } from "./TodoReducer";
import TimeReducer, { TimeStatesType } from "./TimeReducer";

export type RootStatesType = {
  home: TimeStatesType;
  todos: TodoStatesType;
};

const RootReducer = combineReducers({
  home: TimeReducer,
  todos: TodoReducer,
});

const logger: Middleware = (store) => (next) => (action) => {
  console.log("##전달된 action " + action);
  console.log("##전달된 state " + store.getState());
  next(action);

  console.log("##전달된 state " + store.getState());
};
const AppStore = configureStore({ reducer: RootReducer, middleware: () => logger });
export default AppStore;
