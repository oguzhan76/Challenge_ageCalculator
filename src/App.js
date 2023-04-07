// import logo from './logo.svg';
import { useRef, useState } from 'react';
import './App.css';

function App() {
  const day = useRef();
  const month = useRef();
  const year = useRef();

  const [years, setYears] = useState();
  const [months, setMonths] = useState();
  const [days, setDays] = useState();
  
  const calculate = () => {

    const today = new Date();
    const birthdate = new Date(year.current.value, month.current.value-1, day.current.value);
    const diff = today - birthdate; 
    const totalDays = Math.floor(diff / (24 * 3600 * 1000));

    const years = Math.floor(totalDays / 365.25);
    const months = Math.floor((totalDays - (years * 365.25)) / 30.4375);
    const days = Math.floor(totalDays- (years * 365.25) - (months * 30.4375));
    setYears(years);
    setMonths(months);
    setDays(days);
  }

  return (
    <div>
      <p>Day</p>
      <input type='text' ref={day} maxLength='2' placeholder="DD" required></input>
      <input type='text' ref={month} maxLength='2' placeholder="MM" required></input>
      <input type='text' ref={year} maxLength='4' placeholder="YYYY" required></input>
      
      <br></br>
      <button onClick={calculate}>Calculate</button>
      <h3>{years}years</h3>
      <h3>{months}months</h3>
      <h3>{days}days</h3>
    </div>
  );
}

export default App;