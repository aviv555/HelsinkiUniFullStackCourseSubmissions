import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = (props) => {
  // we represent the results only after the user's first 'click' hence the condition
  if (props.good > 0 || props.bad > 0 || props.bad > 0)
    return (
      <table>
        <tbody>
          <StatisticLine text={"good"} value={props.good}></StatisticLine>
          <StatisticLine text={"neutral"} value={props.neutral}></StatisticLine>
          <StatisticLine text={"bad"} value={props.bad}></StatisticLine>
          <StatisticLine text={"all"} value={props.all}></StatisticLine>
          <StatisticLine text={"average"} value={props.average}></StatisticLine>
          <StatisticLine text={"positive"} value={props.positive}></StatisticLine>
        </tbody>
      </table>
    );
  return <h3>No feedBack given</h3>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let all = good + bad + neutral;
  let average = (good - bad) / all;
  let positive = (good / all) * 100;

  return (
    <div>
      <h2>give feedback</h2>

      <Button handleClick={() => setGood(good + 1)} text={"good"} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"} />
      <Button handleClick={() => setBad(bad + 1)} text={"bad"} />

      <h2>statistics</h2>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
