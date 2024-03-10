import { useState } from 'react'

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const StatisticsLine = (props) => <tr><td>{props.text}</td><td>{props.value}</td></tr>

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  let average = 0
  let posPercentage = 0
  if (all != 0) {
    average = ((good * 1) + (neutral * 0) + (bad * -1)) / all
  }
  if (all != 0) {
    posPercentage = (good / all) * 100
  }
  if (all == 0) {
    return (
      <div>No feedback given</div>
   )
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticsLine text="good" value={good}/>
          <StatisticsLine text="neutral" value={neutral}/>
          <StatisticsLine text="bad" value={bad}/>
          <StatisticsLine text="all" value={all}/>
          <StatisticsLine text="average" value={average}/>
          <StatisticsLine text="posPercentage" value={posPercentage + ' %'}/>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onSetGood = (good) => {
    setGood(good + 1)
  }
  const onSetNeutral = (neutral) => {
    setNeutral(neutral + 1)
  }
  const onSetBad = (bad) => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => onSetGood(good)} text="good" />
      <Button handleClick={() => onSetNeutral(neutral)} text="neutral" />
      <Button handleClick={() => onSetBad(bad)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
