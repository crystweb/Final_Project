import React, { Component } from 'react'
import 'react-infinite-calendar/styles.css'
import '../styles/Calendar.css'
import { connect } from 'react-redux'
import { addSelectedDateFromCalendar } from '../actions/actions'
import date_fns from 'date-fns/locale/ru'
import dateOptions from '../constants/constants'
import routes from '../constants/routes'
import { Redirect } from 'react-router-dom'
import InfiniteCalendar from 'react-infinite-calendar'

class Calendar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isDataSelected: false
    }
  }

  render () {
    const {max, min, selected, minDate, maxDate, addDate} = this.props
    return (

      <div>
        {this.state.isDataSelected && <Redirect to={routes.shiftsHistoryForSelectedDay.href}/>}
        <InfiniteCalendar
          className="day"
          rowHeight={60}
          max={max}
          min={min}
          width={401}
          height={600}
          selected={selected}
          minDate={minDate}
          maxDate={maxDate}
          displayOptions={{
            showHeader: false
          }}
          onSelect={date => {
            this.setState({
              isDataSelected: true
            })
            addDate(date.getTime())
          }}
          locale={{
            locale: date_fns,
            weekdays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            weekStartsOn: 1,
            todayLabel: {
              long: 'сейчас'
            }
          }}
        />
      </div>
    )
  }
}

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addDate: (date) => {
      console.log(date)
      dispatch(addSelectedDateFromCalendar(date))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
