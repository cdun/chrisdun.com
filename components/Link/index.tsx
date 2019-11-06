import React from 'react';
import Link from 'next/link';

interface ILink {
  children?: string | JSX.Element | JSX.Element[];
  href?: string;
  as?: string;
}

export default ({ href, as, children }: ILink) => {
  if (href) {
    return (
      <Link href={href} as={as}>
        <a className="Link">{children}</a>
      </Link>
    ) 
  }

  return <span className="Link">{children}</span>;
}