import React from 'react';
import Header from '../Header';
import ProjectList from '../ProjectList';
import RichText from '../RichText';
import './Role.scss';

interface Props {
  role: Role;
}

export default ({ role }: Props) => {
  const { projects = [] } = role;

  return (
    <>
      <Header>
        <div className="Role__title">{role.title}</div>
        <span className="Role__employer">{role.employer.name}</span>
        <div className="Role__dates">{role.started} - {role.ended || 'Present'}</div>
      </Header>
      
      <article className="Role">
        <section className="Role__description">
          <RichText textOrArr={role.description} />
        </section>

        {projects.length && (
          <>
            <h3 className="Role__projects">Projects</h3>
            <ProjectList projects={projects} />
          </>
        )}
      </article>
    </>
  );
}