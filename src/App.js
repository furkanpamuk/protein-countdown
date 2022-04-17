import {useState, useEffect} from 'react'
import "./styles/style.css"
import proteinLogo from './static/protein.png'

function App() {
  const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;
  const bootcampDeadline = new Date(2022,3,24,15,0,0,0);
  const [leftTime, setLeftTime] = useState({})
  const [isTimeFinished, setIsTimeFinished] = useState(false)

  

  const handleLeftTime = (value) => {
    if (value <= 0) {
      setIsTimeFinished(true)
    }else{
      setLeftTime({
        days: Math.floor(value / (day)),
        hours: Math.floor((value % (day)) / hour),
        minutes: Math.floor((value % hour) / minute),
        seconds: Math.floor((value % minute) / second)
      })
    }
  }

  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      const leftDate = bootcampDeadline - now;
      handleLeftTime(leftDate);
    }, 1000);    
  }, [])
  

  return (
    <div className="container">
      <div className="logo-wrapper">
        <div className="logo protein-logo">
          <img src={proteinLogo} alt="Protein Logo" />
        </div>
        <img className="patika-logo logo" src="https://global-uploads.webflow.com/6097e0eca1e87557da031fef/609859a191abe5d64b17fed3_Patika%20logo-p-500.png" alt="Patika Logo" />
        <img className="protel-logo logo" src="https://www.protel.com.tr/wp-content/uploads/2020/03/Protel-350x62px.png" alt="Protel Logo" />
      </div>
      <h1 id="headline">Countdown to Protein Bootcamp</h1>
      <div id="countdown">
        <ul>
          <li><span>{leftTime.days}</span>days</li>
          <li><span>{leftTime.hours}</span>Hours</li>
          <li><span>{leftTime.minutes}</span>Minutes</li>
          <li><span>{leftTime.seconds}</span>Seconds</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
