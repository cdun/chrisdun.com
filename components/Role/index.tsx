import React from 'react';
import Header from '../Header';
import ProjectList from '../ProjectList';
import RichText from '../RichText';
import styles from './Role.module.scss';

interface Props {
  role: Role;
}

const Role = ({ role }: Props) => {
  const { projects = [] } = role;

  return (
    <>
      <Header>
        <div className={styles.Role__title}>{role.title}</div>
        <span className={styles.Role__employer}>{role.employer.name}</span>
        <div className={styles.Role__dates}>{role.started} - {role.ended || 'Present'}</div>
      </Header>
      
      <article className={styles.Role}>
        <section className={styles.Role__description}>
          <RichText textOrArr={role.description} />
        </section>

        {projects.length && (
          <>
            <h3 className={styles.Role__projects}>Projects</h3>
            <ProjectList projects={projects} />
          </>
        )}
      </article>
    </>
  );
};

export default Role;