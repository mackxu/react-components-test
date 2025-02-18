import './index.scss';
import type { Dayjs } from 'dayjs';
import MonthCalendar from './MonthCalendar';
import Header from './Header';

export interface CalendarProps {
  value: Dayjs;
}

const Calendar = (props: CalendarProps) => {
  return (
    <div className="calendar">
      <Header />
      <MonthCalendar {...props} />
    </div>
  );
};

export default Calendar;
