/*

    Working with Index Routes

    If the home route is same as the root route then we can add the index property to the home route. Doing this makes
    the home route as the default route. This path is displayed when the parent route is active.

    example 1
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root/>,
            errorElement: <Error/>,
            children: [
                {
                    path: "",
                    index: true,
                    element: <Home/>
                },
                {
                    path: "/products",
                    element: <Products/>
                },
                {
                    path: "/products/:productId",
                    element: <ProductDetail/>
                }
            ]
        }
    ]);

 */