import './index.scss';
import type { Dayjs } from 'dayjs';
import MonthCalendar from './MonthCalendar';
import Header from './Header';
import { LocaleContext } from './LocaleContext';
import { useState } from 'react';
import dayjs from 'dayjs';
import { useControllableValue } from 'ahooks';

export interface CalendarProps {
  value?: Dayjs;
  defaultValue?: Dayjs;
  onChange?: (day: Dayjs) => void;
  locale?: string;
}

const Calendar = (props: CalendarProps) => {
  const [currDay, setCurrDay] = useControllableValue<Dayjs>(props, {
    defaultValue: dayjs(),
    valuePropName: 'value',
    trigger: 'onChange',
  });
  const [currMonth, setCurrMonth] = useState(currDay);

  const selectHandler = (day: Dayjs) => {
    setCurrDay(day);
    setCurrMonth(day);
    props.onChange?.(day);
  };

  const prevMonthHandler = () => {
    setCurrMonth(currMonth.subtract(1, 'month'));
  };

  const nextMonthHandler = () => {
    setCurrMonth(currMonth.add(1, 'month'));
  };
  return (
    <LocaleContext.Provider value={props.locale ?? LocaleContext._currentValue}>
      <div className="calendar">
        <Header
          currMonth={currMonth}
          prevMonthHandler={prevMonthHandler}
          nextMonthHandler={nextMonthHandler}
          todayHandler={() => selectHandler(dayjs())}
        />
        <MonthCalendar
          {...props}
          value={currDay}
          currMonth={currMonth}
          onDaySelect={selectHandler}
        />
      </div>
    </LocaleContext.Provider>
  );
};

export default Calendar;
