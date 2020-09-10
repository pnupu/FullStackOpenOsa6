import anecdoteServices from '../services/anecdotes'
export const votetoid = (anecdote) => {
  return async dispatch => {
    const votedAnecdote ={...anecdote, votes: anecdote.votes + 1 }
    const ane = await anecdoteServices.update(votedAnecdote)
    dispatch({
      type: 'VOTE',
      data: {
        id: ane.id
      }
    })
  }
}

export const AddAnecdote = (data) => {
  return async dispatch => {
    const newAnecdote = await anecdoteServices.createNew(data)
    dispatch({
      type: 'NEW',
      data: newAnecdote,
    })
  }
}

export const InitialAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteServices.getAll()
    dispatch({
      type: 'INITIAL',
      data: anecdotes
    })
  }
}

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      const anecdoteToChange = state.find(n => n.id === id)
      console.log(anecdoteToChange)
      const changedAnecdote = {
        ...anecdoteToChange, votes: anecdoteToChange.votes + 1 
      }
      return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote)
    case 'NEW':
      return [...state, action.data]
    case 'INITIAL':
      return action.data
    default:
      return state
  }
}
      

export default anecdoteReducer