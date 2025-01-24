export type TodoItemType = {
  id: number;
  todo: string;
};

export const TodoAcitonCreator = {
  addTodo: (todo: string) => ({ type: "TODO_ADD" as const, payload: { todo } }),
  deleteTodo: (id: number) => ({ type: "TODO_DELETE" as const, payload: { id } }),
};

export type TodoActionType = ReturnType<typeof TodoAcitonCreator.addTodo> | ReturnType<typeof TodoAcitonCreator.deleteTodo>;

let newTodoList;

export const TodoReducer = (todoList: TodoItemType[], action: TodoActionType) => {
  switch (action.type) {
    case "TODO_ADD":
      newTodoList = [...todoList, { id: new Date().getTime(), todo: action.payload.todo }];
      return newTodoList;
    case "TODO_DELETE":
      newTodoList = todoList.filter((todoItem) => todoItem.id !== action.payload.id);
      return newTodoList;
    default:
      return todoList;
  }
};
