import React from 'react';
import RichText from '../RichText';
import Technologies from '../Technologies';
import Link from '../Link';

interface IProject {
  project: Project;
}

export default ({ project }: IProject) => {
  const { client } = project;
  return (
    <section className="Project">
      <h4 className="Project__title">
        <Link href={project.url}>
          <>
            {project.title}
            {client && (
              <span className="Project__client"> - {client.name}</span>
            )}
          </>
        </Link>
      </h4>

      <RichText textOrArr={project.description} />

      <Technologies project={project} />
    </section>
  );
}