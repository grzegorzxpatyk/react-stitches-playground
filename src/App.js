import "./styles.css";
import { useState } from "react";
import Button from "./Button";
import { FlexContainer } from "./FlexContainer";

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <FlexContainer>
        <Button
          onClick={() => {
            setCounter((counter) => counter + 1);
          }}
        >
          increase
        </Button>
        <Button
          variant="light"
          onClick={() => {
            setCounter((counter) => counter - 1);
          }}
        >
          decrease
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            setCounter(0);
          }}
        >
          reset
        </Button>
      </FlexContainer>
      <p>You've clicked me {counter} times</p>
    </div>
  );
}
