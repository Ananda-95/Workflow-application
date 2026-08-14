import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

const Counter = () => { 
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      {/* 1. Call action functions with () */}
      <button onClick={() => dispatch(increment())}>Increment</button>

      {/* 2. Reference the count variable */}
      <h5>{count}</h5>

      {/* 3. Call action functions with () */}
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;