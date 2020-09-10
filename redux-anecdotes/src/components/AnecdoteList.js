import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { votetoid } from '../reducers/anecdoteReducer'
import { Notifications } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick }) => {
    return (
        <li>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={handleClick}>vote</button>
          </div>
        </li>
    )
}

const Filter = (anecdotes) => {
  const filter = useSelector(state => state.filter)
  if(filter !== ''){
    console.log('filter is: ', filter)
    const filteredAnecdotes = anecdotes.filter(anecdote => anecdote.content.includes(filter))
    console.log(filteredAnecdotes)
    return filteredAnecdotes
  } else {
    return anecdotes
  }
  
} 

const Anecdotes = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)
    let filtered = Filter(anecdotes)
    const sorted = filtered.sort((a, b) => {
        return a.votes < b.votes ? 1 : -1
      })
    return(
        <ul>
            {sorted.map(anecdote => 
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={() => 
                      dispatch(votetoid(anecdote),
                      dispatch(Notifications(`you voted '${anecdote.content}'`, 4)),
                      
                      )}
                />
            )}
        </ul>
    )
}

export default Anecdotes