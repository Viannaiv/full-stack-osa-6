import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  switch(action.type) {
    case 'VOTE':
      const id = action.data.id
      return state.map(a =>
        a.id !== id ? a : action.data
      )
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    default: return state
  }
}

export const addVoteTo = anecdote => {
 return async dispatch => {
    const updatedAnecdote = await anecdoteService.update(
      anecdote.id, 
      {...anecdote, votes: anecdote.votes + 1}
    )
    dispatch(
      {
        type: 'VOTE',
        data: updatedAnecdote
      }
    )
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.create(content)
    dispatch(
      {
        type: 'NEW_ANECDOTE',
        data: newAnecdote
      }
    )
  }
}

export const initialiseAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(
      {
        type: 'INIT_ANECDOTES',
        data: anecdotes
      }
    )
  }
}

export default reducer