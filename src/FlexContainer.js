import { styled } from "@stitches/react";

export const FlexContainer = styled("div", {
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
