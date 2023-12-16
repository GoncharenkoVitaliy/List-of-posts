import { useState } from "react";
import styles from './Count.module.css';

export function CountFunction() {
  const [count, setCount] = useState(5);

  function Increment() {
    setCount(() => count + 1);
  }

  function Decrement() {
    setCount(count - 1);
  }

  return (
    <div className={styles.count_one}>
      <h1>{count}</h1>
      <div>
        <button onClick={Increment} className={styles.button}>Increment</button>
        <button onClick={Decrement} className={styles.button}>Decrement</button>
      </div>
    </div>
  );
}
