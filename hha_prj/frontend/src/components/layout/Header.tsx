import React, { ReactElement, FC } from 'react';

interface Props {
  title: String
}

const Header: FC<Props> = ({title}): ReactElement => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src="/static/logo.png" width="60" height="50"
          className="d-inline-block align-top" alt="hha logo"/>
        <a className="navbar-brand" href="">{title}</a>
      </nav>
    </div>
  )
}

export default Header
