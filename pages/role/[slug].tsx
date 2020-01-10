import React, { PureComponent } from 'react';
import { NextPageContext } from 'next';
import Role from '../../components/Role';
import Router from 'next/router';
import Employment from '../../data/employment';

interface IProps {
  role: Role;
}

function getRole(slug: string) {
  return Employment.reduce((p, c) => {
    if (c.slug === slug) {
      return c;
    }
    return p;
  })
}

export default class RolePage extends PureComponent<IProps> {

  static getInitialProps(ctx: NextPageContext): IProps {
    const { slug } = ctx.query;
    const role = getRole(slug as string);

    if (!role) {
      Router.replace('/')
    }

    return {
      role
    };
  }

  render() {
    const { role } = this.props;

    return (
      <Role role={role} />
    );
  }

}