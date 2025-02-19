import { Dayjs } from 'dayjs';
import { locales } from './locale';
import { LocaleContext } from './LocaleContext';
import { useContext } from 'react';

export default function Header({
  currMonth,
  prevMonthHandler,
  nextMonthHandler,
  todayHandler,
}: {
  currMonth: Dayjs;
  prevMonthHandler?: () => void;
  nextMonthHandler?: () => void;
  todayHandler?: () => void;
}) {
  const localeKey = useContext(LocaleContext);
  return (
    <div className="calendar-header">
      <div className="calendar-header-left">
        <div className="calendar-header-icon" onClick={prevMonthHandler}>
          &lt;
        </div>
        <div className="calendar-header-value">
          {currMonth.format(locales[localeKey!].formatMonth)}
        </div>
        <div className="calendar-header-icon" onClick={nextMonthHandler}>
          &gt;
        </div>
        <button
          type="button"
          className="calendar-header-btn"
          onClick={todayHandler}
        >
          今天
        </button>
      </div>
    </div>
  );
}
