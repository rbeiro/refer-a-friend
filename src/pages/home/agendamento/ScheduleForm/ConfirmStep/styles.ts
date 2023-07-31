import { Text } from "@/components/Text";
import { Box } from "@/components/Box";
import { styled } from "styled-system/jsx";

const ConfirmForm = styled(Box, {
  base: {
    width: "540px",
    margin: "1.5rem auto 0",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
});

const FormHeader = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",

    paddingBottom: "1.5rem",
    marginBottom: ".5rem",
    borderBottom: "1px solid token(colors.gray.600)",

    "& > p": {
      display: "flex",
      alignItems: "center",
      gap: ".5rem",

      "& svg": {
        color: "token(colors.gray.200)",
        width: "1.25rem",
        height: "1.25rem",
      },
    },
  },
});

const FormError = styled(Text, {});

const FormActions = styled("div", {
  base: {
    display: "flex",
    justifyContent: "flex-end",
    gap: ".5rem",
    marginTop: ".5rem",
  },
});

export { ConfirmForm, FormHeader, FormError, FormActions };
