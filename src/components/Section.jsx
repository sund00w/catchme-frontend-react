import Title from "./Title";
import Button from "./Button";
import { useState } from "react";

function Section({ title }) {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    alert("버튼이 클릭되었습니다.");
    setCount(count + 1);
  };

  return (
    <section>
      <Title title={title} />
      <Button onClick={handleClick} count={count} />
    </section>
  );
}

export default Section;
