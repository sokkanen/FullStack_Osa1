import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [mostVoted, setMostVoted] = useState(0)

  const clickHandler = (index, randomized, vote) => () => {
    if (vote === true){
        let cp = {...votes}
        cp[index] += 1
        setVotes(cp)
        setMostVoted(mostVotes(votes))
    } else {
        setSelected(randomized)
        setMostVoted(mostVotes(votes))
    }
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <div>
        {anecdotes[selected]}
      </div>
      has {votes[selected]} votes.
      <div>
        <Button 
          handleClick = {clickHandler(selected, RandomInteger(), true)} 
          text = "Vote"/>
        <Button 
          handleClick = {clickHandler(selected, RandomInteger(), false)} 
          text = "Next anecdote"/>
      </div>
      <div>
          <h4>Anecdote with most votes: </h4>
      </div>
        <div>
            {anecdotes[mostVoted]}<br/>
            has {votes[mostVoted]} votes
        </div>
    </div>
    )
}

const mostVotes = (array) => {
  let max = -1
  let maxI = -1
  let i
  for (i = 0; i < anecdotes.length; i++) {
    if (array[i] > max){
      max = array[i]
      maxI = i
    }
  }
  return maxI
}

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
    {text}
    </button>
)

const RandomInteger = () => (
    Math.floor(Math.random() * anecdotes.length)
)

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)