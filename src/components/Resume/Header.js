import React from "react";
import { PageHeader, Button } from "antd";

const Header = ({ contact }) => (
  <>
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
    <div className="container-fluid print-header" key="print-header">
      <div className="row">
        <div className="col print-name">{contact.name}</div>
        <div className="col print-phone">{contact.phone}</div>
        <div className="col print-email">{contact.email}</div>
      </div>
    </div>
  </>
);

export default React.memo(Header);
