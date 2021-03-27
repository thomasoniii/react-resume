import React from "react"
import PropTypes from "prop-types"
import { PageHeader, Button } from "antd"

// import and define any icons you'd like here. We're using ant-design, and then just set a mapping
// from the string -> component in the AvailableIcons set and you're done.
import { GithubOutlined } from "@ant-design/icons"

const AvailableIcons = { GithubOutlined }

const Header = ({ contact }) => (
  <>
    <PageHeader
      className="resume-page-header"
      title={contact.name}
      subTitle={contact.blurb}
      extra={[
        ...(contact.urls || []).map((site) => {
          const Icon = AvailableIcons[site.icon]

          return (
            <Button key={site.url} href={site.url}>
              {AvailableIcons[site.icon] && <Icon />} {site.label || site.url}
            </Button>
          )
        }),
        <Button key="phone" href={`tel:${contact.phone}`}>
          {contact.phone}
        </Button>,
        <Button key="email" href={`mailto:${contact.email}`} type="primary">
          {contact.email}
        </Button>,
      ]}
    />
    <div className="print-header">
      <span className="print-name">{contact.name}</span>
      <a href={`tel:${contact.phone}`}>{contact.phone}</a>
      <a href={`mailto:${contact.email}`}>{contact.email}</a>
    </div>
    <div className="print-header">
      {(contact.urls || []).map((site) => {
        const Icon = AvailableIcons[site.icon]

        return (
          <a key={site.url} href={site.url}>
            {AvailableIcons[site.icon] && <Icon />} {site.label || site.url}
          </a>
        )
      })}
    </div>
  </>
)

Header.propTypes = { contact: PropTypes.object }

export default React.memo(Header)
