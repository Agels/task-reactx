// import { Alert } from "react-bootstrap";
import React from "react";
import {Alert} from 'react-bootstrap';

export default class Success extends React.Component {
  render() {
    return (
      <Alert variant="success">
      <Alert.Heading>Hey, Registration Success</Alert.Heading>
      <p>
      Full name : {this.props.name}
      </p>
      <p>
      Email : {this.props.email}
      </p>
      <hr />

    </Alert>
    );
  }
}
