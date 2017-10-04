import React, { Component } from 'react';
import styled from 'styled-components';
import { Router, Link, getRoute } from '../routes';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;


class IndexRoute extends Component {
  render() {
    return (
      <section className={this.props.className}>
        <Title>My page</Title>
        <Link route={getRoute('user', { user: 123 })}>
          <a>Go to users</a>
        </Link>
      </section>
    );
  }
}

export default IndexRoute;

