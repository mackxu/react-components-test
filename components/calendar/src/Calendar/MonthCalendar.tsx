import classNames from 'classnames';
import { Dayjs } from 'dayjs';
import { CalendarProps } from '.';
import { locales } from './locale';
import { useContext } from 'react';
import { LocaleContext } from './LocaleContext';

type MonthCalendarProps = CalendarProps;

const weekdays = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

export default function MonthCalendar({ value }: MonthCalendarProps) {
  const localeKey = useContext(LocaleContext);

  const daysInMonth = getAllDaysInMonth(value);

  return (
    <div className="calendar-month">
      <div className="calendar-month-week-list">
        {weekdays.map((weekday) => (
          <div className="calendar-month-week-list-item" key={weekday}>
            {locales[localeKey!].week[weekday]}
          </div>
        ))}
      </div>
      <div className="calendar-month-body">
        {renderDays(daysInMonth, value)}
      </div>
    </div>
  );
}

type DayItem = {
  day: Dayjs;
  isCurrentMonth: boolean;
};

function getAllDaysInMonth(value: Dayjs) {
  const startOfMonth = value.startOf('month'); // 本月的第一天
  const day = startOfMonth.day(); // 本月第一天是星期几

  const daysInfo: DayItem[] = new Array(6 * 7);

  // 填充上个月的日期
  for (let i = 0; i < day; i++) {
    const prevMonthDay = startOfMonth.subtract(day - i, 'day');
    daysInfo[i] = {
      day: prevMonthDay,
      isCurrentMonth: false,
    };
  }

  // 填充剩余的日期
  const currentMonth = value.month();
  for (let j = day; j < daysInfo.length; j++) {
    const dayItem = startOfMonth.add(j - day, 'day');
    daysInfo[j] = {
      day: dayItem,
      isCurrentMonth: dayItem.month() === currentMonth,
    };
  }

  return daysInfo;
}

function renderDays(daysInfo: DayItem[], value: Dayjs) {
  // 实现6行7列的日历
  const rows = [];
  for (let i = 0; i < 6; i++) {
    const cols = [];
    for (let j = 0; j < 7; j++) {
      const { day, isCurrentMonth } = daysInfo[i * 7 + j];
      cols.push(
        <div
          key={j}
          className={classNames('calendar-month-body-cell', {
            'calendar-month-body-cell-current': isCurrentMonth,
          })}
        >
          <div
            className={classNames({
              'calendar-month-body-cell-selected':
                value.format('YYYY-MM-DD') === day.format('YYYY-MM-DD'),
            })}
          >
            {day.date()}
          </div>
        </div>
      );
    }
    rows.push(cols);
  }

  return rows.map((row, idx) => (
    <div key={idx} className="calendar-month-body-row">
      {row}
    </div>
  ));
}
