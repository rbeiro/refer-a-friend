import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import styles from "./styles.module.scss";
import { getWeekDays } from "@/utils/get-week-days";
import dayjs from "dayjs";
import { useMemo, useState } from "react";
import { api } from "@/utils/api";

interface CalendarWeek {
  week: number;
  days: Array<{
    date: dayjs.Dayjs;
    disabled: boolean;
  }>;
}

type CalendarWeeks = CalendarWeek[];

interface CalendarProps {
  selectedDate?: Date | null;
  setBlockedDates?: (date: Date) => BlockedDates | undefined;
  onDateSelected?: (date: Date) => void;
}

interface BlockedDates {
  blockedWeekDays: Array<number>;
}

const Calendar = ({
  selectedDate,
  onDateSelected,
  setBlockedDates,
}: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs().set("date", 1);
  });

  const { data: blockedDates } = api.timeIntervals.blockedDates.useQuery({
    year: dayjs(currentDate).format("YYYY"),
    month: dayjs(currentDate).format("MM"),
  });
  function handlePreviousMonth() {
    const previousMonthDate = currentDate.subtract(1, "month");
    setCurrentDate(previousMonthDate);
  }
  function handleNextMonth() {
    const nextMonthDate = currentDate.add(1, "month");
    setCurrentDate(nextMonthDate);
  }

  const shortWeekDays = getWeekDays({ short: true });

  const currentMonth = currentDate.format("MMMM");
  const currentYear = currentDate.format("YYYY");

  const calendarWeeks = useMemo(() => {
    const daysInMonthArray = Array.from({
      length: currentDate.daysInMonth(),
    }).map((_, i) => {
      return currentDate.set("date", i + 1);
    });

    const firstWeekDay = currentDate.get("day");

    const previousMonthFillArray = Array.from({
      length: firstWeekDay,
    })
      .map((_, i) => {
        return currentDate.subtract(i + 1, "day");
      })
      .reverse();

    const lastDayInCurrentMonth = currentDate.set(
      "date",
      currentDate.daysInMonth()
    );
    const lastWeekDay = lastDayInCurrentMonth.get("day");

    const nextMonthFillArray = Array.from({
      length: 7 - (lastWeekDay + 1),
    }).map((_, i) => {
      return lastDayInCurrentMonth.add(i + 1, "day");
    });

    const calendarDays = [
      ...previousMonthFillArray.map((date) => {
        return { date, disabled: true };
      }),
      ...daysInMonthArray.map((date) => {
        return {
          date,
          disabled:
            date.endOf("day").isBefore(new Date()) ||
            blockedDates?.blockedWeekDays.includes(date.get("day")),
        };
      }),
      ...nextMonthFillArray.map((date) => {
        return { date, disabled: true };
      }),
    ];

    const calendarWeeks = calendarDays.reduce<CalendarWeeks>(
      (weeks, _, i, original) => {
        const isNewWeek = i % 7 === 0;

        if (isNewWeek) {
          weeks.push({
            week: i / 7 + 1,
            days: original.slice(i, i + 7),
          });
        }

        return weeks;
      },
      []
    );
    return calendarWeeks;
  }, [currentDate]);

  console.log(blockedDates);

  return (
    <div className={styles["calendar__container"]}>
      <div className={styles["calendar__header"]}>
        <p className={styles["calendar__title"]}>
          {currentMonth} <span>{currentYear}</span>
        </p>

        <div className={styles["calendar__actions"]}>
          <button onClick={handlePreviousMonth} title="Previous month">
            <CaretLeft />
          </button>
          <button onClick={handleNextMonth} title="Next month">
            <CaretRight />
          </button>
        </div>
      </div>

      <table className={styles["calendar__body"]}>
        <thead>
          <tr>
            {shortWeekDays.map((weekDay) => (
              <th key={weekDay}>{weekDay}.</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {calendarWeeks.map(({ week, days }) => {
            return (
              <tr key={week}>
                {days.map(({ date, disabled }) => {
                  return (
                    <td key={date.toString()}>
                      <button
                        className={styles["calendar__day"]}
                        disabled={disabled}
                        onClick={() =>
                          onDateSelected ? onDateSelected(date.toDate()) : ""
                        }
                      >
                        {date.get("date")}
                      </button>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export { Calendar };
