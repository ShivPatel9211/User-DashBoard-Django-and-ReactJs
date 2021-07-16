import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';


class Update extends Component {
  constructor() {
    super();


    this.state = {

      username: '',
      first_name: '',
      email: '',
      password: '',
      last_name: ''
    }
    this.email = this.email.bind(this);
    this.password = this.password.bind(this);
    this.username = this.username.bind(this);
    this.last_name = this.last_name.bind(this);
    this.first_name = this.first_name.bind(this);
    this.register = this.register.bind(this);
  }
  email(event) {
    this.setState({ email: event.target.value })
  }
  last_name(event) {
    this.setState({ last_name: event.target.value })
  }
  password(event) {
    this.setState({ password: event.target.value })
  }
  first_name(event) {
    this.setState({ first_name: event.target.value })
  }
  username(event) {
    this.setState({ username: event.target.value })
  }
  register(event) {
    fetch('http://127.0.0.1:8000/api/users/6', {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        first_name: this.state.first_name,
        last_name: this.state.last_name
      })
    }).then((Response) => Response.json())
      .then((Result) => {
    
                this.props.history.push("/Dashboard");
      })
  }
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <div class="row" className="mb-2 pageheading">
                      <div class="col-sm-12 btn btn-primary">
                        Sign Up
                        </div>
                    </div>
                    <InputGroup className="mb-3">
                      <Input type="text"  onChange={this.username} placeholder="Enter User name" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input type="email"  onChange={this.email} placeholder="Enter email" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input type="password"  onChange={this.password} placeholder="Enter password" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <Input type="text"  onChange={this.first_name} placeholder="Enter First name" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <Input type="text"  onChange={this.last_name} placeholder="Enter Last name" />
                    </InputGroup>
                    <Button  onClick={this.register}  color="success" block>Update</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Update;