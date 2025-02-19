import dayjs from 'dayjs';
import Calendar from './Calendar';
import { useState } from 'react';

function App2() {
  // 非受控demo
  return <Calendar defaultValue={dayjs('2024-11-11')} />;
}

function App() {
  const [day, setDay] = useState(dayjs('2024-11-11'));
  // 受控demo
  return <Calendar value={day} onChange={setDay} />;
}

export default App;
