/*

    Layouts and Nested Routes

    If we want to add a wrapper element which contains all the links to the other components then we create the
    component and add it at the root of the paths. All the other route can be added as the children of the root
    route. -> example 1

    Outlet marks the place where the child routes elements should be rendered. -> example 2

    It is possible to have many such parent routes with other children routes.


    example - 1
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root/>,
            children: [
                {
                    path: "/",
                    element: <Home/>
                },
                {
                    path: "/products",
                    element: <Products/>
                }
            ]
        }
    ]);

    example - 2
    import React from 'react';
    import {Outlet} from "react-router-dom";

    const Root = () => {
        return (
            <>
                <h1>Root layout</h1>
                <Outlet/>
            </>
        );
    };

    export default Root;

 */