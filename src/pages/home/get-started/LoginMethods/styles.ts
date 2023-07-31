import { styled } from "styled-system/jsx";

const LoginMethodsContainer = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "1.75rem",
    alignItems: "center",
    textAlign: "center",

    width: "100%",
  },
});

const Separator = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    width: "100%",
    maxWidth: "400px",
    color: "var(--color-gray600)",

    _before: {
      content: '""',
      display: "block",
      width: "100%",
      height: "1px",
      backgroundColor: "var(--color-gray600)",
      borderTopLeftRadius: "var(--roudned-md)",
      borderBottomLeftRadius: "var(--roudned-md)",
    },

    _after: {
      content: '""',
      display: "block",
      width: "100%",
      height: "1px",
      backgroundColor: "var(--color-gray600)",
      borderTopRightRadius: "var(--roudned-md)",
      borderBottomRightRadius: "var(--roudned-md)",
    },
  },
});

export { LoginMethodsContainer, Separator };
