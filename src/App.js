import "./styles.css";
import { styled } from "@stitches/react";
import { useState } from "react";
import Button from "./Button";

const FlexContainer = styled("div", {
  display: "flex",

  variants: {
    direction: {
      row: {
        flexDirection: "row"
      },
      column: {
        flexDirection: "column"
      }
    },
    justifyContent: {
      center: {
        justifyContent: "center"
      },
      between: {
        justifyContent: "space-between"
      }
    }
  },
  defaultVariants: {
    direction: "row",
    justifyContent: "between"
  }
});

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
