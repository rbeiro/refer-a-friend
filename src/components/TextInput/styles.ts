import { styled } from "styled-system/jsx";

export const TextInputContainer = styled("div", {
  base: {
    backgroundColor: "gray.900",
    borderRadius: "6px",
    boxSizing: "border-box",
    border: "2px solid tokens(colors.gray.900)",
    display: "flex",
    alignItems: "center",

    "&:has(input:focus)": {
      borderColor: "primary",
    },

    "&:has(input:disabled)": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },

  variants: {
    size: {
      sm: {
        padding: ".5rem .75rem",
      },
      md: {
        padding: ".75rem 1rem",
      },
    },
  },

  defaultVariants: {
    size: "md",
  },
});

export const Prefix = styled("span", {
  base: {
    fontSize: "0.875rem",
    color: "gray.400",
    fontWeight: "regular",
  },
});

export const Input = styled("input", {
  base: {
    fontSize: "0.875rem",
    color: "hiContrast",
    fontWeight: "regular",
    background: "transparent!",
    border: 0,
    width: "100%",

    "&:focus": {
      outline: 0,
    },

    "&:disabled": {
      cursor: "not-allowed",
    },

    "&::placeholder": {
      color: "gray.400",
    },
  },
});
