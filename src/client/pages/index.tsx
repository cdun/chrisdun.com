import React from 'react';
import Employment from './../../common/data/employment';

interface IProps {
  history: EmploymentHistory;
}

export default class Homepage extends React.Component<IProps> {

  static getInitialProps(): Promise<IProps> {
    return Promise.resolve({ history: Employment });
  }

  render() {
    const { history } = this.props;

    if (!history) {
      console.log(this.props);
      return null;
    }

    return (
      <div>
        {history.map((role, idx) => (
          <p key={idx}>{role.title}</p>
        ))}
      </div>
    )
  }

}