import React, { Component } from 'react'
import PropTypes from 'prop-types'

class IconContainer extends Component {
  componentDidMount () {
    window.feather.replace()
  }

  render () {
    return (
      <i data-feather={this.props.icon} />
    )
  }
}

IconContainer.propTypes = {
  icon: PropTypes.string.isRequired
}

export default IconContainer
