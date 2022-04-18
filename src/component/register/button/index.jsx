import React from "react";
import "../register.css";
import { Button } from "react-bootstrap";
export default class Buttonx extends React.Component {
  render() {
    return (
      <Button
        type={this.props.typex}
        variant="primary"
        size="lg"
        className="mb-3 bt"
      >
        Submit
      </Button>
    );
  }
}
