import React, {useEffect} from 'react'
import Anecdotes from './components/AnecdoteList'
import NewAnecdote from './components/AnecdoteForm'
import ConnectedNotifications from './components/Notification'
import Filter from './components/Filter'
import { useDispatch } from 'react-redux'
import { InitialAnecdotes } from './reducers/anecdoteReducer'


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(InitialAnecdotes())
  }, [dispatch]) 

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <ConnectedNotifications />
      <Anecdotes />
      <NewAnecdote />
    </div>
  )
}

export default App