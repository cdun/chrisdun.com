import React from 'react';

interface IProps {
  project: Project;
}

export default ({project}: IProps) => {
  if ( !project.technologies ) {
    return null;
  }

  const list = project.technologies.split(/[,\.](\w)?/);

  return (
    <ul className="Technologies">
    {list.map(item => (
      <li className="Technology">{item}</li>
    ))}
    </ul>
  );
}