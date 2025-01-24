import { useQuery } from "@tanstack/react-query";
import { fetchTodoList, TodoType } from "../apis/TodoAPI";
import TodoListItem from "./TodoListItem";
import { ReactCsspin } from "react-csspin";

type PropsType = { owner: string };

const TodoList = ({ owner }: PropsType) => {
  const { data, error, isFetching, refetch } = useQuery({
    queryKey: ["fetchTodoList", owner],
    queryFn: () => fetchTodoList({ owner }),
    staleTime: 20 * 1000,
    gcTime: 30 * 1000,
    refetchOnMount: true,
    refetchInterval: 20 * 1000,
    refetchIntervalInBackground: true,
  });
  return (
    <div>
      {" "}
      <ul>
        {data &&
          data?.map((todoItem: TodoType) => {
            return <TodoListItem key={todoItem.id} todoItem={todoItem} owner={owner} refetch={refetch} />;
          })}
      </ul>
      {isFetching ? <ReactCsspin opacity={0.8} message="로딩중입니다" /> : ""}
      {error ? <h3>에러발생 : {error.message}</h3> : ""}
    </div>
  );
};

export default TodoList;
