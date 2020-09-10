import React from 'react'
import { AddAnecdote } from '../reducers/anecdoteReducer'
import { Notifications } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const NewAnecdote = (props) => {
  
    const addAnecdote = async (event) => {
      event.preventDefault()
      const content = event.target.note.value
      event.target.note.value = ''
      props.AddAnecdote(content)
      const notification = 'you created ' + content
      props.Notifications(notification, 5)
    }
  
    return (
      <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <input name="note" />
        <button type="submit">add</button>
      </form>
      </div>
    )
  }
  

  export default connect(
    null, 
    { AddAnecdote, Notifications }
  )(NewAnecdote)