import React, { Component } from 'react';
import styled from 'styled-components';

class User extends Component {
  render() {
  	return (
    <section className={this.props.className}>
      {`This is the User: ${this.props.url.query.user} page`}
    </section>
   	);
  }
}

export default User;
