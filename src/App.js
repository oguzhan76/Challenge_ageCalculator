// import logo from './logo.svg';
import { useRef, useState } from 'react';
import './App.css';

function App() {
  const day = useRef();
  const month = useRef();
  const year = useRef();

  const [years, setYears] = useState('--');
  const [months, setMonths] = useState('--');
  const [days, setDays] = useState('--');
  
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
    <div className='container'>
      <div className='box'>
        <div className='input-container'>
          <div className='input-cell'>
            <label name='day'>D A Y</label>
            <input className='input' type='text' ref={day} maxLength='2' placeholder="DD" required></input>
          </div>
          <div className='input-cell'>
            <label name='month'>M O N T H</label>
            <input className='input' type='text' ref={month} maxLength='2' placeholder="MM" required></input>
          </div>
          <div className='input-cell'>
            <label name='year'>Y E A R</label>
            <input className='input' type='text' ref={year} maxLength='4' placeholder="YYYY" required></input>
          </div>
        </div>

        <div className='divider'>
          <hr></hr>
          <button onClick={calculate}>
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44">
              <g fill="none" stroke="#FFF" strokeWidth="2">
                <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/>
              </g>
            </svg>
          </button>
        </div>
        
        <div className='results-container'>
          <h3><span className='result'>{years}</span>years</h3>
          <h3><span className='result'>{months}</span>months</h3>
          <h3><span className='result'>{days}</span>days</h3>
        </div>
      </div>
    </div>
  );
}

export default App;

// validation
// results needs to go a little higher
//.box background is sticking outside