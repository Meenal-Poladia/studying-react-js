/*

    Better data fetching with react router 6.4

    React Router 6.4 has many potential groundbreaking new features that helps us to simplify how we build react apps
    It gives us many features that simplify the data fetching and data submission in react apps.

    Vite is an alternative to create react app.

    We can add a new prop on our route -> example 1
    Whenever we navigate to this route it will automatically call this function and it will automatically get the data
    returned by this loader function and make it available in the component function. To get hold of that data we use
    the hook useLoaderData.
    The useLoaderData method is not available on the older version of react-router so to use this feature use the
    RouteProvider component which is a self-closing component. It takes a router prop which is created with the help of
    createBrowserRouter. We can create our routes using an array, object or by passing a function.

    example 1
    // Router
    <Route index element={<BlogPostsPage />} loader={blogPostLoader}/>

    //Consumption
    const loaderData = useLoaderData();

    return (
        <>
            <Posts blogPosts={loaderData} />
        </>
    )

*/