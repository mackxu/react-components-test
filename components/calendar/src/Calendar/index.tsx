import './index.scss';
import type { Dayjs } from 'dayjs';
import MonthCalendar from './MonthCalendar';
import Header from './Header';
import { LocaleContext } from './LocaleContext';

export interface CalendarProps {
  value: Dayjs;
  locale?: string;
}

const Calendar = (props: CalendarProps) => {
  return (
    <LocaleContext.Provider value={props.locale ?? LocaleContext._currentValue}>
      <div className="calendar">
        <Header />
        <MonthCalendar {...props} />
      </div>
    </LocaleContext.Provider>
  );
};

export default Calendar;
