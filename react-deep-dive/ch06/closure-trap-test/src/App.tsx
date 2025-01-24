import { useEffect, useReducer } from "react";
import { CountAction, CountReducer, CountStateType } from "./CountReducer";

const initialCount: CountStateType = { count: 0 };

const App = () => {
  const [state, dispatch] = useReducer(CountReducer, initialCount);

  useEffect(() => {
    const handle = setInterval(() => {
      dispatch(CountAction.increment(1));
    }, 2000);
    return () => clearInterval(handle);
  }, [dispatch]);

  useEffect(() => {
    const handle = setInterval(() => {
      console.log(state.count);
    }, 2000);
    return () => clearInterval(handle);
  }, [state]);

  return <div>카운트 : {state.count}</div>;
};

export default App;
