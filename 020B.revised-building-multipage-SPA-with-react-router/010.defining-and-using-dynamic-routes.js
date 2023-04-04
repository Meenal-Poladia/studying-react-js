/*

    Defining and using Dynamic Routes

    To create a route dynamically we use the syntax -> example 1

    To know which dynamic route has been initiated we can use the hook useParams. This params object is a simple
    JavaScript object which contains every dynamic path segment we defined in our route definition as a property.
    -> example 2

    Usually for creating dynamic routing we use a unique identifier or an id as this helps to generate more data
    about the product from the backend.

    example - 1
    {
        path: "/products/:productId",    //to create route dynamically
        element: <ProductDetail/>
    }

    example 2
    import React from 'react';
    import {useParams} from "react-router-dom";

    const ProductDetail = () => {
        const params = useParams();

        return (
            <div>
               <h1>Product Detail</h1>
                <p>{params.productId}</p>
            </div>
        );
    };

    export default ProductDetail;

 */