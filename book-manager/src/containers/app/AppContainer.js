import React, { Component } from 'react'
import PropTypes from 'prop-types'
import App from './App'

class AppContainer extends Component {
  render () {
    return (
      <App children={this.props.children} />
    )
  }
}

AppContainer.propTypes = {
  children: PropTypes.object.isRequired
}

export default AppContainer
