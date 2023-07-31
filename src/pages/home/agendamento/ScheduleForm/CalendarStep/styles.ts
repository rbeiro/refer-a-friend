import { Box } from "@/components/Box";
import { Text } from "@/components/Text";
import { cva } from "styled-system/css";
import { styled } from "styled-system/jsx";

const Container = styled(Box, {
  base: {
    margin: "1.5rem auto 0",
    padding: "0",
    display: "grid",
    maxWidth: "100%",
    position: "relative",
  },

  variants: {
    isTimePickerOpen: {
      true: {
        gridTemplateColumns: "1fr 280px",

        "@media(max-width: 900px)": {
          gridTemplateColumns: "1fr",
        },
      },

      false: {
        width: "540px",
        gridTemplateColumns: "1fr",
      },
    },
  },

  defaultVariants: {
    isTimePickerOpen: false,
  },
});

const TimePicker = styled("div", {
  base: {
    borderLeft: "1px solid var(--color-gray600)",
    padding: "1.5rem 1.5rem 0",
    overflowY: "scroll",
    display: "grid",
    gridTemplateColumns: "1fr",

    position: "absolute",
    top: "0",
    bottom: "0",
    right: "0",
    width: "280px",
  },
});

const TimePickerHeader = styled(Text, {
  base: {
    fontWeight: "500",

    "& span": {
      color: "gray.200",
    },
  },
});

const TimePickerList = styled("div", {
  base: {
    marginTop: "0.75rem",
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "0.5rem",

    "@media(max-width: 900px)": {
      gridTemplateColumns: "2fr",
    },
  },
});

const TimePickerItem = styled("button", {
  base: {
    backgroundColor: "var(--color-gray600)",
    padding: "0.5rem 0",
    cursor: "pointer",
    color: "hiContrast",
    borderRadius: "var(--rounded-md)",
    fontSize: "var(--fontSize-sm)",
    lineHeight: "var(--lineHeight-base)",

    "&:last-child": {
      marginBottom: "1.5rem",
    },

    "&:disabled": {
      background: "none",
      cursor: "default",
      opacity: "0.4",
    },

    "&:not(:disabled):hover": {
      background: "var(--color-gray500)",
    },

    "&:focus": {
      boxShadow: "0 0 0 2px var(--color-hiConstrast)",
    },
  },
});

export {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerList,
  TimePickerItem,
};
