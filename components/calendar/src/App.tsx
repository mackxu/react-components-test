import dayjs from 'dayjs';
import Calendar from './Calendar';

function App() {
  return <Calendar value={dayjs(Date.now())} />;
}

export default App;
