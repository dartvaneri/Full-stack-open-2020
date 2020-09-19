import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  var [good, setGood] = useState(0);
  var [neutral, setNeutral] = useState(0);
  var [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>Anna palautetta</h1><br/>
      <Button handleClick={handleGood} text='Hyvä'/>
      <Button handleClick={handleNeutral} text='Neutraali'/>
      <Button handleClick={handleBad} text='Huono'/>
      <br/>
      <h2>Tilasto</h2><br/>
      <Statistic text='Hyvä' amount={good} /><br/>
      <Statistic text='Neutraali' amount={neutral} /><br/>
      <Statistic text='Huono' amount={bad} /><br/>
    </div>
  )
}
const Button = (props) => {
  return (
      <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Statistic = (props) => {
  return (
    <span>{props.text} {props.amount}</span>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))