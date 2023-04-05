/*

    Adding links for dynamic routes

    Most of the times the data which we want to render will be fetched from the backend, in such cases we can use
    the below method to display the data. -> example 1

    example 1
    import React from 'react';
    import classes from "../index.css";
    import {Link} from "react-router-dom";

    const Products = () => {
        //Assuming this data is coming from the backend
        const PRODUCTS = [
            {id: "p1", title: "Product 1"},
            {id: "p2", title: "Product 2"},
            {id: "p3", title: "Product 3"},
            {id: "p4", title: "Product 4"},
            {id: "p5", title: "Product 5"}
        ]
        return (
            <div className={classes.content}>
                <h1>Products Page</h1>
                {PRODUCTS.map((product) => (
                    <li key={product.id}>
                        <Link to={`${product.id}`}>
                            {product.title}
                        </Link>
                    </li>
                ))}
            </div>
        );
    };

    export default Products;

 */