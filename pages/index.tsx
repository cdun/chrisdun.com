import React from 'react';
import Head from 'next/head';
import Employment from './../data/employment';
import Project from '../components/Project';
import Role from '../components/Role';

interface IProps {
  history: EmploymentHistory;
}

export default class Homepage extends React.Component<IProps> {

  static defaultProps = { history: Employment };

  render() {
    const { history } = this.props;

    if (!history) {
      console.log(this.props);
      return null;
    }

    return (
      <>
        <Head>
          <title>Chris Dun</title>
        </Head>
        <main className="page">
          <h1>Chris Dun</h1>

          {history.map(role => (
            <Role key={role.started} role={role}>
              {role.projects && role.projects.map(p => {
                return (
                  <Project key={p.title} project={p} />
                );
              })}
            </Role>
          ))}
        </main>
      </>
    )
  }

}