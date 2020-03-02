import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  switch(action.type) {
    case 'VOTE':
      const id = action.data.id
      const anecdote = state.find(a => a.id === id)

      const updatedAnecdote = { 
        ...anecdote, 
        votes: anecdote.votes + 1
      }

      return state.map(a =>
        a.id !== id ? a : updatedAnecdote
      )
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    default: return state
  }
}

export const addVoteTo = (id) => (
  {
    type: 'VOTE',
    data: {
      id
    }
  }
)

export const createAnecdote = (data) => (
  {
    type: 'NEW_ANECDOTE',
    data
  }
)

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