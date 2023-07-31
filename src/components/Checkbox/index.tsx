import { Check } from "@phosphor-icons/react";
import { CheckboxContainer, CheckboxIndicator } from "./styles";
import { type ComponentProps } from "react";

export type CheckboxProps = ComponentProps<typeof CheckboxContainer>;

export const Checkbox = (props: CheckboxProps) => {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  );
};
