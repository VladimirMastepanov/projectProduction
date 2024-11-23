import { useState } from "react";
import classes from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);
  // console.log(styles);

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div className={classes.first}>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
    </div>
  );
};

