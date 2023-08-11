import { Calendar } from "@/components/Calendar";
import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerItem,
  TimePickerList,
} from "./styles";
import { useState } from "react";
import dayjs from "dayjs";
import { api } from "@/utils/api";

const CalendarStep = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const isDateSelected = !!selectedDate;

  const weekDay = selectedDate ? dayjs(selectedDate).format("dddd") : null;
  const dateAndMonth = selectedDate
    ? dayjs(selectedDate).format("DD[ de ]MMMM")
    : null;

  const { data: availability } = api.timeIntervals.availability.useQuery(
    {
      date: dayjs(selectedDate).format("YYYY-MM-DD"),
    },
    { enabled: !!selectedDate }
  );

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />

      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            {weekDay} <span>{dateAndMonth}</span>
          </TimePickerHeader>

          <TimePickerList>
            {availability?.possibleTimes?.map((hour) => (
              <TimePickerItem
                key={hour}
                disabled={!availability.availableTimes.includes(hour)}
              >
                {String(hour).padStart(2, "0")}:00h
              </TimePickerItem>
            ))}
          </TimePickerList>
        </TimePicker>
      )}
    </Container>
  );
};

export { CalendarStep };
