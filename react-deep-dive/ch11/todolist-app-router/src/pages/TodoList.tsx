import { Link } from "react-router-dom";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import TodoActionCreator from "../redux/TodoActionCreator";
import { RootStatesType } from "../redux/AppStore";
import { TodoItemType } from "../redux/TodoReducer";

type PropsType = {
  todoList: TodoItemType[];
  deleteTodo: ({ id }: { id: number }) => void;
  toggleDone: ({ id }: { id: number }) => void;
};

const TodoList = ({ todoList, deleteTodo, toggleDone }: PropsType) => {
  const todoItems = todoList.map((item) => {
    return <TodoItem key={item.id} todoItem={item} deleteTodo={deleteTodo} toggleDone={toggleDone} />;
  });
  return (
    <>
      <div className="row">
        <div className="col p-3">
          <Link className="btn btn-primary" to="/todos/add">
            할일 추가
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ul className="list-group">{todoItems}</ul>
        </div>
      </div>
    </>
  );
};

const TodoListContainer = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state: RootStatesType) => state.todos.todoList);
  const deleteTodo = ({ id }: { id: number }) => dispatch(TodoActionCreator.deleteTodo({ id }));
  const todgleDone = ({ id }: { id: number }) => dispatch(TodoActionCreator.toggleDone({ id }));

  return <TodoList todoList={todoList} deleteTodo={deleteTodo} toggleDone={todgleDone} />;
};

export { TodoList };
export default TodoListContainer;
