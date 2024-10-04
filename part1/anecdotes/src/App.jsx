import { useState } from "react";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}> {text} </button>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votesArray, setVotesArray] = useState(
    new Array(anecdotes.length).fill(0)
  );

  console.log(Math.max(...[]));

  function randomAnacdote() {
    let randomNumber = getRandomInt(0, anecdotes.length - 1);
    console.log(randomNumber);
    setSelected(randomNumber);
  }

  function vote() {
    console.log(selected, "selected: ");
    console.log(votesArray, "votes before: ");
    let copy = [...votesArray];
    copy[selected] += 1;
    console.log(copy, "votes after: ");
    setVotesArray(copy);
  }

  // find the index of the largest number in an array for the most popular anecdote
  function findIndexOfLargest(arr) {
    if (arr.length === 0) return -1; // Handle empty array case
    let largestIndex = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > arr[largestIndex]) {
        largestIndex = i;
      }
    }
    return largestIndex;
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]} <br />
      has {votesArray[selected]} votes <br />
      <Button handleClick={randomAnacdote} text={"next anacdote"}></Button>
      <Button handleClick={vote} text={"vote"}></Button>
      <h1>anecdote with most votes</h1>
      {anecdotes[findIndexOfLargest(votesArray)]}
    </div>
  );
};

export default App;
