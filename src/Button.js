import { styled } from "./stitches/styled";

const Button = styled("button", {
  all: "unset",
  padding: ".8rem 1.2rem",
  margin: ".4rem",
  borderRadius: "1.6rem",
  fontFamily: '"JetBrains Mono", monospace',
  cursor: "pointer",
  transition: "transform .08s ease-in-out",
  "&:active": {
    transform: "translate(0, 2px) scale(0.95)"
  },

  variants: {
    variant: {
      dark: {
        background: "#333333",
        color: "$primaryLight",
        "&:hover": {
          background: "#444444"
        }
      },
      light: {
        background: "#e3e3e3",
        color: "$primaryDark",
        "&:hover": {
          background: "#c6c6c6"
        }
      },
      outlined: {
        backgroundColor: "#ffffff00",
        backdropFilter: "blur(1px)",
        transition:
          "transform .08s ease-in-out, backdrop-filter .15s ease-in-out, background-color 0.3s ease-in-out",
        color: "$primaryDark",
        border: "1px solid #11181c",
        "&:hover": {
          backdropFilter: "blur(2px)",
          backgroundColor: "#e6e6e633"
        }
      }
    }
  },
  defaultVariants: {
    variant: "dark"
  }
});

export default Button;
