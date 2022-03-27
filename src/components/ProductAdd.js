import React, { Component } from 'react';

import NavBarManu from './NavBarManu';

class ProductAdd extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            description: null,
            price: null,
            quantity: null,
        }
    }
    create() {
        fetch('http://localhost:3000/product', {
            method: "Post",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Product has heen added")
            })
        })
    }
    render() {
        return (
            <div>
                <NavBarManu />
                <h1>Product Create</h1>
                <div>
                    <input onChange={(event) => { this.setState({ name: event.target.value }) }}
                        placeholder="Product Name" /> <br /><br />
                    <input onChange={(event) => { this.setState({ description: event.target.value }) }}
                        placeholder="Restaurant Email" /> <br /><br />
                    <input onChange={(event) => { this.setState({ price: event.target.value }) }}
                        placeholder="Restaurant Rating" /> <br /><br />
                    <input onChange={(event) => { this.setState({ quantity: event.target.value }) }}
                        placeholder="Restaurant Address" /> <br /><br />
                    <button onClick={() => { this.create() }}>Add Product</button>
                </div>

            </div>
        );
    }
}

export default ProductAdd;