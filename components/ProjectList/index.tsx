import React, { FunctionComponent } from 'react';
import Project from '../Project';

interface IProps {
    projects?: Project[];
}

const ProjectList: FunctionComponent<IProps> = ({ projects = [] }) => {
    if (projects.length) {
        return (
            <section className="ProjectList">
                {projects.map(p => (
                    <Project key={p.title} project={p} />
                ))}
            </section>
        )
    }

    return null;
};

export default ProjectList;