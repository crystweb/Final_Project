import axios from 'axios'
import routes from '../constants/routes'

export const getLastShift = (callback) => {
  axios.get('/workshift')
    .then(response => response.data)
    .then(callback)
}

export const startData = (
  callbackUser,
  callbackPosition,
  callbackSchedule,
  callbackLocation,
  callbackComments,
  callbackStatus,
  callbackFrequency,
  callbackUsers,
  callbackTasks) => {
  axios.get('/test/user')
    .then(response => response.data)
    .then(callbackUser)
  axios.get('/position')
    .then(response => response.data)
    .then(callbackPosition)
  axios.get('/schedule')
    .then(response => response.data)
    .then(callbackSchedule)
  axios.get('/location')
    .then(response => response.data)
    .then(callbackLocation)
  axios.get('/workshift')
    .then(response => response.data)
    .then(callbackComments)
  axios.get('/task/status')
    .then(response => response.data)
    .then(callbackStatus)
  axios.get('/task/frequency')
    .then(response => response.data)
    .then(callbackFrequency)
  axios.get('/user')
    .then(response => response.data)
    .then(callbackUsers)
  axios.get('/task')
    .then(response => response.data)
    .then(callbackTasks)
}

export const getPreviousRoute = (currentPath) => {
  return Object.values(routes).find(item => item.href === currentPath)
}
