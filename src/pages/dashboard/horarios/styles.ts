import { Box } from "@/components/Box";
import { styled } from "styled-system/jsx";

export const IntervalBox = styled(Box, {
  base: {
    marginTop: "1.5rem",
    display: "flex",
    flexDirection: "column",
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
  },
});
