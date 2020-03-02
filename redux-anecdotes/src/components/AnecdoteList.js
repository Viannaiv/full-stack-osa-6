import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVoteTo } from '../reducers/anecdoteReducer'
import { setNotification, resetNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(({ filter, anecdotes }) => {
    return filter === '' 
      ? anecdotes
      : anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))
  })
  
  anecdotes.sort((a, b) => b.votes - a.votes)

  const dispatch = useDispatch()

  const vote = (anecdote) => {
    dispatch(addVoteTo(anecdote))

    dispatch(setNotification(`You voted for '${anecdote.content}'`))
    setTimeout(() => {dispatch(resetNotification())}, 5000)
  }

  return (
    <>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>Vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList