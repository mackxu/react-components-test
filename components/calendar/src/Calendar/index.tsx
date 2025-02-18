import './index.scss';
import type { Dayjs } from 'dayjs';
import MonthCalendar from './MonthCalendar';
import Header from './Header';
import { LocaleContext } from './LocaleContext';
import { useState } from 'react';

export interface CalendarProps {
  value: Dayjs;
  onChange?: (day: Dayjs) => void;
  locale?: string;
}

const Calendar = (props: CalendarProps) => {
  const [currDay, setCurrDay] = useState(props.value);
  const [currMonth, setCurrMonth] = useState(props.value);

  const selectHandler = (day: Dayjs) => {
    setCurrDay(day);
    setCurrMonth(day);
    props.onChange?.(day);
  };
  return (
    <LocaleContext.Provider value={props.locale ?? LocaleContext._currentValue}>
      <div className="calendar">
        <Header currMonth={currMonth} />
        <MonthCalendar {...props} value={currDay} onDaySelect={selectHandler} />
      </div>
    </LocaleContext.Provider>
  );
};

export default Calendar;
