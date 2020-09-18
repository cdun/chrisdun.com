import React, { FunctionComponent } from 'react';
import Employment from './../../data/employment';
import Header from '../Header';
import Link from '../Link';
import styles from './Home.module.scss';

const Home: FunctionComponent = () => (
    <main className={styles.Home}>
        <Header>
            <h1 className={styles.Home__title}>Chris Dun</h1>
            <h2 className={styles.Home__subtitle}>Software engineer specialising in frontend and mixed reality</h2>
        </Header>

        <nav>
            {Employment.map(role => (
                <Link
                    key={role.slug}
                    className={styles.Home__role}
                    href="/role/[slug]"
                    as={`/role/${role.slug}`}
                >
                    <h4>
                        <span className={styles.Home__role_employer}>{role.employer.name}</span>
                        &nbsp;-&nbsp;
                        <span className={styles.Home__role_title}>{role.title}</span>
                    </h4>
                </Link>
            ))}
        </nav>
    </main>
);

export default Home;