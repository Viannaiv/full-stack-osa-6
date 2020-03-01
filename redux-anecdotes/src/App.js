import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const addVoteTo = (id) => (
  {
    type: 'VOTE',
    data: {
      id
    }
  }
)

const createAnecdote = (content) => (
  {
    type: 'NEW_ANECDOTE',
    data: {
      content
    }
  }
)

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(addVoteTo(id))
  }

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>Vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote'/></div>
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default App