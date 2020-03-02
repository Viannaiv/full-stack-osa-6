const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

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
      const newAnecdote = asObject(action.data.content)
      return [...state, newAnecdote]
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

export const createAnecdote = (content) => (
  {
    type: 'NEW_ANECDOTE',
    data: {
      content
    }
  }
)

export const initialiseAnecdotes = (anecdotes) => (
  {
    type: 'INIT_ANECDOTES',
    data: anecdotes
  }
)

export default reducer