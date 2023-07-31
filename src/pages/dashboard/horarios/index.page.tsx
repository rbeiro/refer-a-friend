import { Checkbox } from "@/components/Checkbox";
import { TextInput } from "@/components/TextInput";
import {
  IntervalBox,
  IntervalDay,
  IntervalInputs,
  IntervalItem,
} from "./styles";
import { Text } from "@/components/Text";

export default function Dashboard() {
  return (
    <IntervalBox>
      <IntervalItem>
        <IntervalDay>
          <Checkbox />
          <Text>Segunda-feira</Text>
        </IntervalDay>
        <IntervalInputs>
          <TextInput size="sm" type="time" step={60} />
        </IntervalInputs>
      </IntervalItem>
    </IntervalBox>
  );
}
