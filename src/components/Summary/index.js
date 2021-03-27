import React from "react";
import { Card, Typography } from "antd";
const { Title } = Typography;

const Summary = ({ summary }) => (
  <Card title={<Title level={2}>Summary</Title>}>
    {summary.map((p, i) => (
      <p key={i}>{p}</p>
    ))}
  </Card>
);

export default React.memo(Summary);
