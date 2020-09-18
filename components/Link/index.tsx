import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';

interface ILink {
  children?: string | JSX.Element | JSX.Element[];
  className?: string;
  href?: string;
  as?: string;
}

const LinkComponent = ({ href, as, className, children }: ILink) => {
  if (href) {
    return (
      <Link href={href} as={as}>
        <a className={classnames('Link', className)}>{children}</a>
      </Link>
    ) 
  }

  return <span className="Link">{children}</span>;
};

export default LinkComponent;