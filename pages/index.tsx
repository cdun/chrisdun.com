import React from 'react';
import Head from 'next/head';
import Employment from './../data/employment';
import Role from '../components/Role';

interface IProps {
  history: EmploymentHistory;
}

export default class Homepage extends React.Component<IProps> {

  static defaultProps = { history: Employment };

  render() {
    const { history } = this.props;

    if (!history) {
      return null;
    }

    return (
      <>
        <Head>
          <title>Chris Dun</title>
        </Head>
        <>
          {history.map(role => (
            <Role key={role.started} role={role} />
          ))}
        </>
      </>
    )
  }

}