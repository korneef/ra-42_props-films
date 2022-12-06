import React from 'react'
import PropTypes from 'prop-types'
import Star from './Star'

function Stars({ count }) {
  if (!(typeof(count) === 'number' && count >= 1 && count <= 5)) {
    return
  }

  let stars = [];
  for (let i = 1; i <= count; i += 1) {
    stars.push(<li key={i}><Star/></li>)
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {stars}
    </ul>
  )
}

Stars.propTypes = {
  count: PropTypes.number,
}

export default Stars