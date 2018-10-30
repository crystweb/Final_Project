import React, { Component } from 'react'
import './styles/App.css'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  addAllLocation,
  addAllPositions,
  addAllSchedules,
  addAllUsers,
  addCurrentUser,
  addFrequencies,
  addShift,
  addTasks,
  addTaskStatuses
} from './actions/actions'
import Preloader from './components/Preloader'
import { startData } from './utils/utils'
import Navigation from './components/Navigation'
import SignIn from './pages/authentication/SignIn'
import axios from 'axios'

class App extends Component {
  componentDidMount () {
    startData(
      data => { this.props.addAllPositions(data) },
      data => { this.props.addSchedules(data) },
      data => { this.props.addAllLocation(data) },
      data => { this.props.addShift(data) },
      data => { this.props.addStatuses(data) },
      data => { this.props.addFrequencies(data) },
      data => { this.props.addAllUsers(data) },
      data => { this.props.addTasks(data) }
    )
      axios.get('/test/user')
        .then(response => this.props.addUser(response.data))
  }

  render () {
    if (!this.props.user) {
      return (
        <SignIn/>
      )
    } else {
      if (!this.props.user ||
        !this.props.schedules ||
        !this.props.positions ||
        !this.props.comments ||
        !this.props.locations ||
        !this.props.statuses ||
        !this.props.frequencies ||
        !this.props.allTasks) {
        return (
          <Preloader/>
        )
      } else {
        return (
          <div className="container">
            <Navigation header={true}/>
            <Navigation/>
          </div>
        )
      }
    }
  }
}

const mapStateToProps = ({comments, startData, tasks}) => {
  return {

    positions: startData.positions,
    schedules: startData.schedules,
    comments: comments.lastComments,
    locations: startData.locations,
    statuses: startData.statuses,
    frequencies: startData.frequencies,
    allTasks: tasks.allTasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (data) => {
      dispatch(addCurrentUser(data))
    },
    addAllPositions: (data) => {
      dispatch(addAllPositions(data))
    },
    addSchedules: (data) => {
      dispatch(addAllSchedules(data))
    },
    addAllLocation: (data) => {
      dispatch(addAllLocation(data))
    },
    addShift: (data) => {
      dispatch(addShift(data))
    },
    addStatuses: (data) => {
      dispatch(addTaskStatuses(data))
    },
    addFrequencies: (data) => {
      dispatch(addFrequencies(data))
    },
    addAllUsers: (data) => {
      dispatch(addAllUsers(data))
    },
    addTasks: (data) => {
      dispatch(addTasks(data))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
