import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faEdit,faTrash } from '@fortawesome/free-solid-svg-icons';
import {
    Link
  } from 'react-router-dom';
import NavBarManu from './NavBarManu';


class ProductList extends Component {
    constructor()
    {
        super();
        this.state={
            list:null,
        }
    }
    componentDidMount(){
        this.getData()
    }
    getData()
    {
        fetch("http://localhost:3000/product").then((response) => {
            response.json().then((result) => {
                this.setState({ list: result })
            })
        })
    }
   delete(sno)
   {
    fetch('http://localhost:3000/product/'+sno,
    {
        method: "DELETE",

    }).then((result)=>{
        result.json().then((resp)=>{
            alert("Product has heen Delete")
            this.getData()
        })
    })
}
    render() {
       
        return (
            <div>
            <NavBarManu />
            <h1>Product List</h1>
            {
                this.state.list ?
                    <div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>name</th>
                                    <th>description</th>
                                    <th>price</th>
                                    <th>quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.list.map((item, i) =>
                                        <tr>
                                            <td>{item.sno}</td>
                                            <td>{item.name}</td>
                                            <td>{item.description}</td>
                                            <td>{item.price}</td>
                                            <td>{item.quantity}</td>
                                            <td><Link to={"/update/"+item.sno}><FontAwesomeIcon icon={faEdit} color="orange" /> </Link>
                                            <span onClick={()=>this.delete(item.sno)}><FontAwesomeIcon icon={faTrash} color="red" /> </span>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </div>
                    : <p>Please Wait...</p>
            }
        </div>
    );
}
}

export default ProductList;