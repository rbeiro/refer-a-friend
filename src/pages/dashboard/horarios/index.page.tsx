import { Checkbox } from "@/components/Checkbox";
import { TextInput } from "@/components/TextInput";
import {
  FormError,
  IntervalBox,
  IntervalContainer,
  IntervalDay,
  IntervalInputs,
  IntervalItem,
} from "./styles";
import { Text } from "@/components/Text";
import { Button } from "@rbeiro-ui/react-components";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { getWeekDays } from "../../../utils/get-week-days";
import { zodResolver } from "@hookform/resolvers/zod";
import { convertTimeStringToMinutes } from "@/utils/convert-time-string-to-minutes";
import { api } from "@/utils/api";
import { useSession } from "next-auth/react";

export const timeIntervalFormSchema = z.object({
  intervals: z
    .array(
      z.object({
        weekDay: z.number().min(0).max(6),
        enabled: z.boolean(),
        startTime: z.string(),
        endTime: z.string(),
      })
    )
    .length(7)
    .transform((intervals) => intervals.filter((interval) => interval.enabled))
    .refine((intervals) => intervals.length > 0, {
      message: "Você precisa selecionar pelo menos um dia da semana!",
    })
    .transform((intervals) => {
      return intervals.map((interval) => {
        return {
          weekDay: interval.weekDay,
          startTimeInMinutes: convertTimeStringToMinutes(interval.startTime),
          endTimeInMinutes: convertTimeStringToMinutes(interval.endTime),
        };
      });
    })
    .refine(
      (intervals) => {
        return intervals.every(
          (interval) =>
            interval.endTimeInMinutes - 120 >= interval.startTimeInMinutes
        );
      },
      { message: "O horário final deve ser pelo menos 2h distante do início" }
    ),
});

const weekdays = getWeekDays({});

type TimeIntervalsFormInput = z.input<typeof timeIntervalFormSchema>;
export type TimeIntervalsFormOutput = z.output<typeof timeIntervalFormSchema>;

export default function Dashboard() {
  const timeIntervalsMutation = api.timeIntervals.create.useMutation();
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<TimeIntervalsFormInput, any, TimeIntervalsFormOutput>({
    resolver: zodResolver(timeIntervalFormSchema),
    defaultValues: {
      intervals: [
        { weekDay: 0, enabled: false, startTime: "09:00", endTime: "19:00" },
        { weekDay: 1, enabled: false, startTime: "09:00", endTime: "19:00" },
        { weekDay: 2, enabled: true, startTime: "09:00", endTime: "19:00" },
        { weekDay: 3, enabled: true, startTime: "09:00", endTime: "19:00" },
        { weekDay: 4, enabled: true, startTime: "09:00", endTime: "19:00" },
        { weekDay: 5, enabled: true, startTime: "09:00", endTime: "19:00" },
        { weekDay: 6, enabled: true, startTime: "09:00", endTime: "19:00" },
      ],
    },
  });

  const { fields } = useFieldArray({
    control,
    name: "intervals",
  });

  const intervals = watch("intervals");

  function handleSetTimeIntervals({ intervals }: TimeIntervalsFormOutput) {
    timeIntervalsMutation.mutate({ intervals });
  }
  return (
    <main>
      <IntervalBox asChild>
        <form action="" onSubmit={handleSubmit(handleSetTimeIntervals)}>
          <IntervalContainer>
            {fields.map((field, index) => (
              <IntervalItem key={field.id}>
                <IntervalDay>
                  <Controller
                    name={`intervals.${index}.enabled`}
                    control={control}
                    render={({ field }) => {
                      return (
                        <Checkbox
                          onCheckedChange={(checked) => {
                            field.onChange(checked === true);
                          }}
                          checked={field.value}
                        />
                      );
                    }}
                  />
                  <Text>{weekdays[field.weekDay]}</Text>
                </IntervalDay>
                <IntervalInputs>
                  <TextInput
                    size="sm"
                    type="time"
                    step={60}
                    disabled={intervals[index]?.enabled === false}
                    {...register(`intervals.${index}.startTime`)}
                  />
                  <TextInput
                    size="sm"
                    type="time"
                    step={60}
                    disabled={intervals[index]?.enabled === false}
                    {...register(`intervals.${index}.endTime`)}
                  />
                </IntervalInputs>
              </IntervalItem>
            ))}
          </IntervalContainer>

          {errors.intervals && (
            <FormError>{errors.intervals.message}</FormError>
          )}

          <Button widthFull type="submit" isLoading={isSubmitting}>
            Confirmar
          </Button>
        </form>
      </IntervalBox>
    </main>
  );
}
