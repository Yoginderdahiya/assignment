import React, { Component } from 'react';
import NavBarManu from './NavBarManu';

class ProductUpdate extends Component {
    constructor()
    {
        super();
        this.state = {
            name: null,
            description: null,
            price: null,
            quantity: null,
            sno:null,
        }
    }
    componentDidMount()
    { 
        
        fetch('http://localhost:3000/productt/'+this.props.match.params.id).then((response) => {
            response.json().then((result) => {
                console.warn(result)
                 this.setState({ 
                     name:result.name,
                     description:result.description,
                     sno:result.sno,
                     price:result.price,
                     quantity:result.quantity

                  })
            })
        })
    }
    update()
    {
        fetch('http://localhost:3000/product/'+this.state.sno, {
            method: "PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Product has heen Updated")
            })
        })
    }
    render() {
        
        return (
            <div>
                <NavBarManu />
                <h1>Productt Update</h1>
                <div>
                    <input onChange={(event) => { this.setState({ name: event.target.value }) }}
                        placeholder="Product Name" value={this.state.name} /> <br /><br />
                    <input onChange={(event) => { this.setState({ description: event.target.value }) }}
                        placeholder="product Description" value={this.state.description} /> <br /><br />
                    <input onChange={(event) => { this.setState({ price: event.target.value }) }}
                        placeholder="Product Price"  value={this.state.price}/> <br /><br />
                    <input onChange={(event) => { this.setState({ quantity: event.target.value }) }}
                        placeholder="Product Quantity"  value={this.state.quantity}/> <br /><br />
                    <button onClick={() => { this.update() }}>Update Product</button>
                </div>
            </div>
        );
    }
}

export default ProductUpdate;