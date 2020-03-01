import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, resetNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content))

    dispatch(setNotification(`Added '${content}'`))
    setTimeout(() => {dispatch(resetNotification())}, 5000)
  }

  return (
    <>
      <h3>Create new</h3>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote'/></div>
        <button type='submit'>Create</button>
      </form><br/>
    </>
  )
}

export default AnecdoteForm