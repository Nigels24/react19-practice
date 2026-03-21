import { useState } from "react";

export const Counter = () => {

  const [count, setCount] = useState(0);
  
  console.log("count:", count);

  const handleClick = () => {
    setCount(count + 1);
  };
  
  return (
    <div>
      <button onClick={handleClick}>Count: {count}</button>
    </div>
  );
};
