import { Button } from "@rbeiro-ui/react-components";
import { styled } from "styled-system/jsx";

const SocialButtonsContainer = styled("div", {
  base: {
    maxWidth: "400px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
  },
});

const SocialLoginAction = styled(Button, {});

export { SocialButtonsContainer, SocialLoginAction };
