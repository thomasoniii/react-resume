import React from "react";
import { PageHeader, Button } from "antd";

const Header = ({ contact }) => (
  <PageHeader
    className="resume-page-header"
    title={contact.name}
    subTitle={contact.blurb}
    extra={[
      <Button key="phone" href={contact.phone}>
        {contact.phone}
      </Button>,
      <Button key="email" href={`mailto:${contact.email}`} type="primary">
        {contact.email}
      </Button>,
    ]}
  />
);

export default React.memo(Header);
