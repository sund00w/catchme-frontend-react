import { useState, useEffect } from "react";

export function TestComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  console.log("test component가 재호출되었습니다.");

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("userEffect start");

    return () => {
      console.log("useEffect end");
    };
  }, []);

  useEffect(() => {
    setCount(0);
  }, [name]);

  return (
    <div>
      <div>{count}</div>
      <button type="button" onClick={handleClick}>
        INCREMENT
      </button>
      <h1>{name}</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </div>
  );
}
