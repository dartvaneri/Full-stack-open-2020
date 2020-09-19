import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  var [good, setGood] = useState(0);
  var [neutral, setNeutral] = useState(0);
  var [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  const sum = good + neutral + bad;
  const positive = sum == 0 ? 0 : good / sum * 100;
  const positiveArr = Array(good).fill(1); 
  const neutralArr = Array(neutral).fill(0); 
  const badArr = Array(bad).fill(-1); 
  const avgArr = positiveArr.concat(neutralArr.concat(badArr))
  const average = avgArr.length == 0 ? 0 : avgArr.reduce((a, b) => a + b) / avgArr.length

  return (
    <div>
      <h1>Anna palautetta</h1><br/>
      <Button handleClick={handleGood} text='Hyvä'/>
      <Button handleClick={handleNeutral} text='Neutraali'/>
      <Button handleClick={handleBad} text='Huono'/>
      <br/>
      <h2>Tilasto</h2><br/>
      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        sum={sum} 
        average={average} 
        positive={positive} />
    </div>
  )
}
const Button = (props) => {
  return (
      <button onClick={props.handleClick}>{props.text}</button>
  )
}

const StatisticLine  = (props) => {
  return (
    <>
    <span>{props.text}</span><br/>
    </>
  )
}
const Statistics = ({good, neutral, bad, sum, average, positive}) => {
  if(sum == 0) return (<span>Palautetta ei ole annettu</span>)
  
  return (
    <>
    <StatisticLine  text={'Hyvä ' + good} />
    <StatisticLine  text={'Neutraali ' + neutral} />
    <StatisticLine  text={'Huono ' + bad} />
    <StatisticLine  stic text={'Yhteensä ' + sum} />
    <StatisticLine  text={'Keskiarvo ' + average} />
    <StatisticLine  text={'Positiivisia ' + positive + ' %'} />
    </>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))