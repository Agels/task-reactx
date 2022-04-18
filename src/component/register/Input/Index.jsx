import React from "react";
import { Form } from "react-bootstrap";
export default class Input extends React.Component {
  render() {
    return (
      <div>
        <Form.Label>{this.props.label}</Form.Label>
        <Form.Control
          name={this.props.namex}
          type={this.props.typex}
          onChange={(e) => this.props.onChangex(e.target.value)}
          placeholder={this.props.placeholder}
          defaultValue={this.props.val}
        />
      </div>
    );
  }
}
