import React from 'react';

interface IProps {
  project: Project;
}

export default ({ project }: IProps) => {
  if (!project.technologies) {
    return null;
  }

  const list = project.technologies
    .split(/[,\.](\w)?/)
    .filter(n => !!n);

  return (
    <ul className="Technologies">
      {list.map((item, idx) => (
        <li key={idx} className="Technology">{item}</li>
      ))}
    </ul>
  );
}