import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { addCommentForSelectedDate } from '../../actions/actions'
import SortedComments from '../../components/SortedComments'
import Preloader from '../../components/Preloader'

class ShiftHistoryForSelectedDay extends Component {
  componentDidMount () {
    axios.get(`/workshift?date=${this.props.date}`)
      .then(response => this.props.addCommentsForSelectedDate(response.data))
  }

  render () {
    if (this.props.commentsForSelectedDate && this.props.date) {
      return (
        <div className="container">
          <h4 className="shiftHistory-dateTitle">{new Date(this.props.date).toLocaleDateString()}</h4>
            <SortedComments comments={this.props.commentsForSelectedDate}/>
        </div>
      )
    } else {
      return (
        <Preloader/>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    date: state.selectedDate.historySelectedDate,
    commentsForSelectedDate: state.selectedDate.commentsForSelectedDates
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCommentsForSelectedDate: (data) => {
      dispatch(addCommentForSelectedDate(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShiftHistoryForSelectedDay)
