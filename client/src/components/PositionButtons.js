import React, { Component } from 'react'
import { connect } from 'react-redux'

class PositionButtons extends Component {
  constructor (props) {
    super(props)
    this.state = {
      view: 'admin'
    }
  }

  setPositionView (event) {
    this.setState({view: event.target.value})
  }

  checkPosition (position) {
    if (position === this.state.view) {

    }
  }

  render () {
    const {position, comments} = this.props
    let positionComments = comments.map(comment =>

      <li key={comment.id} style={{marginBottom: 15}}>
        <h5>{comment.forename} {comment.surname}</h5>
        <h3>{comment.text}</h3>
        <h3>{comment.authorPosition}</h3>
      </li>
    )
    console.log(positionComments)
    const selectPositionInputs = position.map(position =>
      <li key={position.id}><input name="position" type='radio' value={position.title}/>{position.title}</li>)
    return (
      <section className="comments">
        <div style={{marginBottom: 10}} onChange={this.setPositionView.bind(this)}>
          {selectPositionInputs}
        </div>
        {positionComments}
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    position: state.user.positions
  }
}

export default connect(mapStateToProps)(PositionButtons)
