import './App.css';
import AlarmOption from './components/AlarmOption/AlarmOption';
import ContextAlarm from './components/context/ContextAlarm';
import DigitalClock from './components/DigitalClock/DigitalClock';

function App() {

  return (
    <section className="clock container">
      <div className="clock__container grid">
        <div className="clock__content grid">
          <ContextAlarm>
            <DigitalClock />
            <AlarmOption />
          </ContextAlarm>
        </div>
      </div>
    </section>
  );
}

export default App;
