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

Tech.propTypes = { tech: PropTypes.array }

export default React.memo(Tech)
