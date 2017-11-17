import React, { Component } from 'react';

class Product extends Component {
    render() {
        const { match } = this.props;
        const { name } = match.params;
        console.log(name);
        return (
            <div>
                <h1>Single product: {name}</h1>                
            </div>
        );
    }
}

export default Product;
