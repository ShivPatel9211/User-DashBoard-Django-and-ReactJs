import React, { Component } from 'react';
import './App.css';
import List from './Userlist';
import axios from 'axios'
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';



class Dashboard extends Component {

    state = {
        list: [],
        text: ""
    }

    showlist = () => {
        axios.get('http://127.0.0.1:8000/api/users/')
            .then((res) => {
                console.log(res.data)
                this.setState({ list: res.data })
            })
    }

    componentDidMount() {
        this.showlist()
    }


    render() {
        return (
            <div class="row" className="mb-2 pageheading">
                <div class="col-sm-12 btn btn-primary">
                <h1>List of Users</h1>
                <Table >
                    <thead>
                        <tr>
                            <th >Id</th>
                            <th >User Name</th>
                            <th >First Name</th>
                            <th >Last Name</th>
                            <th >Email</th>
                        </tr>
                    </thead>
                </Table>

                <div class="task">
                    {
                        this.state.list.map((value, id) => {
                            return <List
                                value={value} key={id}
                            />
                        })
                    }
                </div>
            </div>
            </div>
        );
    }
}
export default Dashboard;