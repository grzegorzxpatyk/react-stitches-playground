import { useState } from "react";
import Button from "./Button";
import { FlexContainer } from "./FlexContainer";
import { globalCss } from "@stitches/react";

const globalStyles = globalCss({
  "*": { margin: 0, padding: 0 },
  ".App": {
    background: "linear-gradient(-45deg, #e08191, lightsteelblue)",
    backgroundSize: "cover",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'
  }
});

export default function App() {
  const [counter, setCounter] = useState(0);
  globalStyles();
  return (
    <div className="App">
      <FlexContainer
        css={{ height: "100vh" }}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
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
      </FlexContainer>
    </div>
  );
}
