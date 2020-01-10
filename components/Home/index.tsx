import React, { FunctionComponent } from 'react';
import Employment from './../../data/employment';
import Header from '../Header';
import Link from '../Link';
import './Home.scss';

const Home: FunctionComponent = () => (
    <main className="Home">
        <Header>
            <h1 className="Home__title">Chris Dun</h1>
            <h2 className="Home__subtitle">Software engineer specialising in frontend and mixed reality</h2>
        </Header>

        <nav>
            {Employment.map(role => (
                <Link
                    key={role.slug}
                    className="Home__role"
                    href="/role/[slug]"
                    as={`/role/${role.slug}`}
                >
                    <h4>
                        <span className="Home__role-employer">{role.employer.name}</span>
                        &nbsp;-&nbsp;
                        <span className="Home__role-title">{role.title}</span>
                    </h4>
                </Link>
            ))}
        </nav>
    </main>
);

export default Home;