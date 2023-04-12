/*

    Getting Creative With Nested Routes

    We can add any jsx code which defines a route inside the <Route>
    We can also use the exact same route to view the selected route and disappear other content when the route
    is not active.

    Thus with the help of nested routes we can manage conditionally rendering of different content based on the URL
    without having to manage some complex state.

    example 1
    <Route path={`/quotes/${params.quoteId}`} exact>
        <div>
            <Link to={`/quotes/${params.quoteId}/comments`}>
                Load Comment
            </Link>
        <div>
    </Route>
    <Route path={`/quotes/${params.quoteId}/comments`}>
        Comments
    </Route>

 */