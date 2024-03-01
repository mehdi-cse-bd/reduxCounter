import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  decrementByAmount,
} from "../Redux/slices/countSlice";

const Redux = () => {
  const [incrementAmount, setIncrementAmount] = useState(0);
  const AddAmount = Number(incrementAmount) || 0;
  //   console.log(incrementAmount);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  //   console.log(count);
  return (
    <div className=" container text-center  me-2">
      <h1>Redux Counter</h1>
      <h4>{count}</h4>
      <button
        className="btn btn-success  me-2"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="btn btn-danger  me-2"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        className="btn btn-warning me-2"
        onClick={() => dispatch(reset())}
      >
        Reset
      </button>
      <button
        className="btn btn-success me-2"
        onClick={() => dispatch(incrementByAmount(10))}
      >
        IncrementBy10
      </button>
      <button
        className="btn btn-danger me-2"
        onClick={() => dispatch(decrementByAmount(10))}
      >
        DecrementBy10
      </button>
      <p></p>
      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <p></p>
      <button
        className="btn btn-success"
        onClick={() => dispatch(incrementByAmount(AddAmount))}
      >
        Add by the Amount
      </button>
    </div>
  );
};

export default Redux;
