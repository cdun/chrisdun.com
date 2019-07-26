import React from 'react';

interface ILink {
  children?: string | JSX.Element | JSX.Element[];
  to?: string;
}

export default ({ to, children }: ILink) => {
  if (to !== undefined) {
    return (
      <a
        className="Link"
        href={to}
      >
        {children}
      </a>
    )
  }

  return <span className="Link">{children}</span>;
}