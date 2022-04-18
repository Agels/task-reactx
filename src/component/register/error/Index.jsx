// import { Alert } from "react-bootstrap";
import React from "react";

export default class Error extends React.Component {
  state = {
    show: true,
  };

  handleClick() {
    this.setState({ show: false });
  }

  render() {
    if (this.state.show) {
      return (
        <div>
          {/* <Alert
            variant="danger"
            onClose={() => this.handleClick()}
            dismissible
            className="hidden"
          >
              {this.props.error}
          </Alert> */}
          <p style={{ color: "red" }}>*{this.props.error}</p>
        </div>
      );
    }
  }
}
