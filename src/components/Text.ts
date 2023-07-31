import { styled } from "styled-system/jsx";

const Text = styled("p", {
  base: {
    fontFamily: "var(--text-font)",
    lineHeight: "var(--lineHeight-base)",
    margin: 0,
    color: "var(--color-hiContrast)",
  },
});

export { Text };
