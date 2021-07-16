import React, { Component } from 'react';
import './App.css';
import { Table ,Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
// import { Table ,th,thead,tr,tbody,td } from 'react-bootstrap';

function List(props) {
    // function Update(id){
    //     props.history.push("/Update");
    // }
    return (
      
        <>
         <Table>
      <tbody>
      <tr>
          <th scope="row">{props.value.id}</th>
          <td>{props.value.username}</td>
          <td>{props.value.first_name}</td>
          <td>{props.value.last_name}</td>
          <td>{props.value.email}</td>
          {/* <td><Button color="danger" onClick={()=>Update(props.value.id)} >Update</Button></td> */}
        </tr>
      </tbody>
    </Table>
        </>
    )
}
export default List;