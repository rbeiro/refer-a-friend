import { Box } from "@/components/Box";
import { Text } from "@/components/Text";
import { styled } from "styled-system/jsx";

export const IntervalBox = styled(Box, {
  base: {
    marginTop: "1.5rem",
    display: "flex",
    flexDirection: "column",
    maxWidth: "852px",
    padding: "2rem",
    margin: "5rem auto 2rem",
  },
});

export const IntervalContainer = styled("div", {
  base: {
    border: "1px solid token(colors.gray.600)",
    borderRadius: "8px",
    marginBottom: "1rem",
  },
});

export const IntervalItem = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0.75rem 1rem",

    "& + &": {
      borderTop: "1px solid token(colors.gray.600)",
    },
  },
});

export const IntervalDay = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  },
});
export const IntervalInputs = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",

    "& input::-webkit-calendar-picker-indicator": {
      filter: "invert(100%) brightness(30%)",
    },
  },
});

export const FormError = styled(Text, {
  base: {
    color: "error.color",
    marginBottom: "1rem ",
    fontSize: "12px",
  },
});
