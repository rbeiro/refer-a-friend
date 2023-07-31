import { styled } from "styled-system/jsx";

const EmailForm = styled("form", {
  base: {
    width: "100%",
    maxWidth: "400px",

    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
});

export { EmailForm };
