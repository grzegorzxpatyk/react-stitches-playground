import "./styles.css";
import { styled } from "@stitches/react";
import { useState } from "react";

const Button = styled("button", {
  all: "unset",
  padding: ".8rem 1.2rem",
  borderRadius: "1.6rem",
  fontFamily: '"JetBrains Mono", monospace',
  cursor: "pointer",
  transition: "transform .05s ease-in-out",
  "&:active": {
    transform: "translate(0, 2px) scale(0.95)"
  },

  variants: {
    variant: {
      dark: {
        background: "#333333",
        color: "#e3e3e3",
        "&:hover": {
          background: "#444444"
        }
      },
      light: {
        background: "#e3e3e3",
        color: "#22181c",
        "&:hover": {
          background: "#c6c6c6"
        }
      }
    }
  },
  defaultVariants: {
    variant: "dark"
  }
});

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <Button
        onClick={() => {
          setCounter((counter) => counter + 1);
        }}
      >
        Click me!
      </Button>
      <p>You've clicked me {counter} times</p>
      <Button variant="light">Something</Button>
    </div>
  );
}
