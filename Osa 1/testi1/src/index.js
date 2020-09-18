import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  const age = 33;
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age="23"/>
      <Hello name="Pekka" age={age}/>
    </div>
  )
}


const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, {props.age} years</p>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))