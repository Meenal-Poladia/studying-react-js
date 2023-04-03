/*

    Showing error pages and error components

    React router has an errorElement which can be rendered when the path not specified in the route is entered.
    This property can be bubbled up to the parent element and so the property can be set on the parent route.

    Whenever the error is generated this route will be rendered.

    example
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root/>,
            errorElement: <Error/>,
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

 */