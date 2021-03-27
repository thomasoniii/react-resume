import React from "react"
import PropTypes from "prop-types"
import { Card, Typography } from "antd"
const { Title } = Typography

const Summary = ({ summary }) => (
  <Card size="small" title={<Title level={2}>Summary</Title>}>
    {summary.map((p, i) => (
      <p key={i}>{p}</p>
    ))}
  </Card>
)

Summary.propTypes = { summary: PropTypes.object }

export default React.memo(Summary)
