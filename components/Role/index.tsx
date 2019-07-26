import React from 'react';
import Link from '../Link';
import RichText from '../RichText';
import './Role.scss';

interface Props {
  children?: JSX.Element[];
  role: Role;
}

export default ({ children, role }: Props) => (
  <article className="Role">
    <h3 className="Role__title">
      <Link to={role.employer.url}>
        <>
          {role.title}
          <span className="Role__employer">{role.employer.name}</span>
        </>
      </Link>
    </h3>
    <div className="Role__dates">{role.started} - {role.ended || 'Present'}</div>
    <section className="Role__description">
      <RichText textOrArr={role.description} />
    </section>
    {children}
  </article>
)