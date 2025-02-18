import { Dayjs } from 'dayjs';
import { locales } from './locale';
import { LocaleContext } from './LocaleContext';
import { useContext } from 'react';

export default function Header({ currMonth }: { currMonth: Dayjs }) {
  const localeKey = useContext(LocaleContext);
  return (
    <div className="calendar-header">
      <div className="calendar-header-left">
        <div className="calendar-header-icon">&lt;</div>
        <div className="calendar-header-value">
          {currMonth.format(locales[localeKey!].formatMonth)}
        </div>
        <div className="calendar-header-icon">&gt;</div>
        <button className="calendar-header-btn">今天</button>
      </div>
    </div>
  );
}
