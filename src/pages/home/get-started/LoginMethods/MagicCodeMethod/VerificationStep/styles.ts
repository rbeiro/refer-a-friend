import { Box } from "@/components/Box";
import { LoadingSpinner } from "@rbeiro-ui/react-components";
import { styled } from "styled-system/jsx";

const EmailContainer = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
  },
});

const VerificationResult = styled("div", {
  base: {
    height: "50px",
    width: "100%",
    maxWidth: "500px",
    position: "relative",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    gap: ".5rem",
  },
  variants: {
    hasErrorMessage: {
      true: {
        border: "1px solid token(colors.error.border)",
        borderRadius: "var(--rounded-md)",
        color: "error.color",
        background: "error.background",
      },
    },
    hasSuccessMessage: {
      true: {
        border: "1px solid token(colors.success.border)",
        borderRadius: "var(--rounded-md)",
        color: "success.color",
        background: "success.background",
      },
    },
    isLoading: {
      true: {
        border: "1px solid token(colors.gray.7)",
        borderRadius: "var(--rounded-md)",
        color: "gray.11",
        background: "gray.2",
      },
    },
  },
  defaultVariants: {
    hasErrorMessage: false,
    hasSuccessMessage: false,
    isLoading: false,
  },
});

const VerificationSpinner = styled("div", {
  base: {
    position: "relative",
    height: "50px",
    width: "50px",
  },
});

export { EmailContainer, VerificationResult, VerificationSpinner };
