import React from "react"
import PropTypes from "prop-types"
import { Card, Typography, List } from "antd"

import "./Education.css"

const { Title, Text } = Typography

const Education = ({ schools }) => (
  <Card size="small" title={<Title level={2}>Education</Title>}>
    <List
      dataSource={schools}
      renderItem={(school) => (
        <List.Item className="school">
          <List.Item.Meta
            title={
              <div className="school-container">
                <span>
                  <span className="school-name">
                    <Text strong>{school.school}</Text>
                  </span>
                  , <span className="location">{school.location}</span>
                </span>
                <span className="date">{school.date}</span>
              </div>
            }
            description={school.results}
          />
        </List.Item>
      )}
    />
  </Card>
)

Education.propTypes = {
  schools: PropTypes.object,
}

export default React.memo(Education)
