import TodoList from "./TodoList.tsx";
import InputTodo from "./InputTodo.tsx";
import { ITodoItem } from "../AppContainer";

type PropsType = {
  todoList: ITodoItem[];
  addTodo: (todo: string) => void;
  deleteTodo: (no: number) => void;
  toggleDone: (no: number) => void;
};

const App = ({ todoList, addTodo, deleteTodo, toggleDone }: PropsType) => {
  return (
    <div className="container">
      <div className="card card-body bg-light">
        <div className="title">:: Todolist App</div>
      </div>
      <div className="card card-default card-borderless">
        <div className="card-body">
          <InputTodo addTodo={addTodo} />
          <TodoList todoList={todoList} toggleDone={toggleDone} deleteTodo={deleteTodo} />
        </div>
      </div>
    </div>
  );
};

export default App;
