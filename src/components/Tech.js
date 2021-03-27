import React from "react"
import PropTypes from "prop-types"

const Tech = ({ tech = [] }) => {
  if (!tech.length) {
    return null
  }
  return (
    <div>
      Technology used:
      <span className="tech">{tech.join(", ")}</span>
    </div>
  )
}

Tech.propTypes = { tech: PropTypes.object }

export default React.memo(Tech)
