import { css } from "@emotion/react";
import { Button, Button2 } from "./components/Button";
import { TestComponent } from "./components/test-component";
import { TestComponent2 } from "./components/test-component2";

function App() {
  return (
    <div className="App">
      <TestComponent />
      <TestComponent2 />
      <Button color="red">red test</Button>
      <Button color="blue">blue test</Button>
      <Button2 color="yellow">yellow test</Button2>
      <button
        css={css`
          background: green;
        `}
      >
        css button test
      </button>
    </div>
  );
}

export default App;
