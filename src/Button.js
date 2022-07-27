import { styled } from "@stitches/react";

const Button = styled("button", {
  all: "unset",
  padding: ".8rem 1.2rem",
  margin: ".4rem",
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
      },
      outlined: {
        background: "transparent",
        backdropFilter: "blur(2px)",
        color: "#22181c",
        border: "1px solid #11181c",
        "&:hover": {
          backdropFilter: "blur(4px)"
        }
      }
    }
  },
  defaultVariants: {
    variant: "dark"
  }
});

export default Button;