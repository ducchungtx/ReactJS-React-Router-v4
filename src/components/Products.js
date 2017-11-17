import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Product from './Product';

class Products extends Component {
    render() {
        const products = [
            { id: 1, slug:'iphone-x', name: 'iPhone X', price: 35000000 },
            { id: 2, slug: 'iphone-8', name: 'iPhone 8', price: 15000000 },
            { id: 3, slug: 'iphone-7', name: 'iPhone 7', price: 11000000 },
            { id: 4, slug: 'iphone-6', name: 'iPhone 6', price: 5000000 },
            { id: 5, slug: 'iphone-5', name: 'iPhone 5', price: 3000000 },
        ];

        let { match } = this.props;        
        let url = match.url;
        // console.log(match);

        let result = products.map((product, index) => {
            return (
                <NavLink to={`${url}/${product.slug}`} key={index}>
                    <li className="list-group-item">
                        { product.id } - { product.name } - { product.price }
                    </li>
                </NavLink>
            )
        })
        return (
            <div className="container">
                <h1>Danh sách sản phẩm</h1>                
                <div className="row">
                    <ul className="list-group">
                        {result}
                    </ul>
                </div>
                
                <div className="row">
                    <Route path="/products/:name" component={Product} />
                </div>
                
            </div>
        );
    }
}

export default Products;
