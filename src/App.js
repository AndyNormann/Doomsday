import React, {useState} from 'react';

const App = () => {
  const [time, setTime] = useState(0)

  const timeLeft = () => {
    let today = new Date()
    let doomsday = new Date(today.getFullYear(), 9, 31)
    let one_day=1000
    setTime(Math.ceil((doomsday.getTime()-today.getTime())/(one_day)))
  }

  setTimeout(() => {
    timeLeft()
  }, 1000)

  return (
    <div className="doom">
      <div>TIME UNTIL NO FRONTEND</div>
      <div>{time} !</div>
    </div>
  );
}

export default App;
