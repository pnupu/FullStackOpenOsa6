import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    notification: state.notifications
}}

const Notification = (props) => {
  

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
     {props.notification}
    </div>
  )
}


const ConnectedNotifications = connect(mapStateToProps)(Notification)

export default ConnectedNotifications