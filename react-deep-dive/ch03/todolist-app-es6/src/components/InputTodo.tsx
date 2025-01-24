import { KeyboardEvent, useState } from "react";

type PropsType = {
  addTodo: (todo: string) => void;
};

const InputTodo = ({ addTodo }: PropsType) => {
  const [todo, setTodo] = useState("");

  const addHandler = () => {
    addTodo(todo);
    setTodo("");
  };
  const enterInput = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addHandler();
    }
  };

  return (
    <div className="row">
      <div className="col">
        <div className="input-group">
          <input
            id="msg"
            type="text"
            className="form-control"
            name="msg"
            placeholder="할일을 여기에 입력!"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            onKeyUp={enterInput}
          />
          <span className="btn btn-primary input-group-addon" onClick={addHandler}>
            추가
          </span>
        </div>
      </div>
    </div>
  );
};

export default InputTodo;