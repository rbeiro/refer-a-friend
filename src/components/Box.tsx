import { styled } from "styled-system/jsx";
import { Slot } from "@radix-ui/react-slot";
import { type ElementType } from "react";

type PolymorphicProps<T> = T & {
  asChild?: boolean;
  children?: React.ReactNode;
};

const Box = <T,>({ asChild, ...props }: PolymorphicProps<T>) => {
  let boxHTMLElement: ElementType = "div";
  if (asChild) {
    boxHTMLElement = Slot;
  }

  const StyledBox = styled(boxHTMLElement, {
    base: {
      borderRadius: "var(--rounded-md)",
      background: "gray.800",
      border: "1px solid token(colors.gray.600)",
      p: "1rem",
    },
  });

  return <StyledBox {...props} />;
};

export { Box };
