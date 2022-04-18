import React from "react";
import Error from "./error/Index";
import Input from "./Input/Index";
import Button from "./button/index";
import Success from "./sucess";
import "./register.css";
import { Container, Form, Row, Card } from "react-bootstrap";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      email: "",
      password: "",
      agree: false,
      error: [],
      success: null,
    };
  }

  handleSubmit = (el) => {
    el.preventDefault();
    const error = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const { fullname, email, password, agree } = this.state;

    if (fullname.length === 0) {
      error.push("nama lengkap harus di isi");
    }

    if (email.length === 0) {
      error.push("email wajib di isi");
    } else if (!emailRegex.test(email)) {
      error.push("harus tipe email");
    }

    if (password.length === 0) {
      error.push("passsord harus di isi");
    } else if (password.length < 6) {
      error.push("passsord harus lebih dari 6");
    }
    if (!agree) {
      error.push("centang agreement");
    }
    if (error.length > 0) {
      this.setState({ error });
    } else {
      this.setState({ error: [] });
      this.setState({success:true})

      setTimeout(() => {
        this.setState({success:false})
      }, 6000)
      alert(`${this.state.fullname}
        ${this.state.email}
        ${this.state.password}`);

        setTimeout(() => {
          this.setState({
            fullname: "",
            email: "",
            password: "",
            agree: false,
            error: [],
          });
        }, 5000)
      
      el.target.reset();
   
    }
  };

  render() {
    return (
      <>
        <Container className="regis">
          <Row>
            <Card className="col-lg-4 mt-5 mx-auto round">
              <Card.Body>
                <Form onSubmit={this.handleSubmit}>
             
                  {this.state.success && < Success name={this.state.fullname} email={this.state.email}/>}
                  {this.state.error.map((val, i) => {
                    return <Error key={i} error={val} show={true} />;
                  })}
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Input
                      label="fullname"
                      typex="text"
                      namex="fullname"
                      onChangex={(val) =>
                        this.setState({ fullname: val }, () =>
                          console.log(this.state)
                        )
                      }
                      placeholder="masukan nama lengkap"
                      // val={this.state.fullname}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Input
                      label="email"
                      typex="text"
                      namex="email"
                      onChangex={(val) =>
                        this.setState({ email: val }, () =>
                          console.log(this.state)
                        )
                      }
                      placeholder="masukan email"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Input
                      label="password"
                      typex="text"
                      namex="password"
                      onChangex={(val) =>
                        this.setState({ password: val }, () =>
                          console.log(this.state)
                        )
                      }
                      placeholder="masukan password"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="Check"
                      onChange={(e) =>
                        this.setState({ agree: e.target.checked })
                      }
                    ></Form.Check>
                  </Form.Group>
                  <Button typex="submit" />
                </Form>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </>
    );
  }
}
