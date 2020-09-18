import React from 'react';
import RichText from '../RichText';
import Technologies from '../Technologies';
import Link from '../Link';
import styles from './Project.module.scss';

interface IProject {
  project: Project;
}

const Project = ({ project }: IProject) => {
  const { client } = project;
  return (
    <aside className={styles.Project}>
      <h4 className={styles.Project__title}>
        <Link href={project.url}>
          <>
            {project.title}
            {client && (
              <span className={styles.Project__client}> - {client.name}</span>
            )}
          </>
        </Link>
      </h4>

      <RichText textOrArr={project.description} />

      <Technologies project={project} />
    </aside>
  );
};

export default Project;