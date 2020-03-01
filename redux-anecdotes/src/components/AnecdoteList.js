import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVoteTo } from '../reducers/anecdoteReducer'
import { setNotification, resetNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  anecdotes.sort((a, b) => b.votes - a.votes)

  const dispatch = useDispatch()

  const vote = (id, content) => {
    dispatch(addVoteTo(id))

    dispatch(setNotification(`You voted for '${content}'`))
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
            <button onClick={() => vote(anecdote.id, anecdote.content)}>Vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList