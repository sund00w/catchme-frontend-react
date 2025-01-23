import { useState, useEffect } from "react";

export function MyComponent() {
  const [name, setName] = useState("");
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    setName("hello world!");

    return () => {
      alert("안녕히가세요");
    };
  }, []);

  useEffect(() => {
    if (flag) {
      setName("");
      setFlag(false);
    }
  }, [flag]);

  return (
    <div>
      <h1>{name}</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button type="button" onClick={() => setFlag(!flag)}>
        reset
      </button>
    </div>
  );
}
