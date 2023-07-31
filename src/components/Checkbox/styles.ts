import * as Checkbox from "@radix-ui/react-checkbox";
import { styled } from "styled-system/jsx";

export const CheckboxContainer = styled(Checkbox.Root, {
  base: {
    all: "unset",
    width: "1.5rem",
    height: "1.5rem",
    backgroundColor: "gray.900",
    borderRadius: "4px",
    lineHeight: "0",
    cursor: "pointer",
    overflow: "hidden",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    border: "2px solid token(colors.gray.900)",

    '&[data-state="checked"]': {
      backgroundColor: "primary",
    },

    "&:focus": {
      border: "2px solid token(colors.primary)",
    },
  },
});

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  base: {
    display: "flex",
    color: "hiContrast",
    lineHeight: "0",
    width: "1rem",
    height: "1rem",

    '&[data-state="checked"]': {
      animation: "slideIn 150ms var(--transition-basic)",
    },
    '&[data-state="unchecked"]': {
      animation: "slideOut 150ms var(--transition-basic)",
    },
  },
});
