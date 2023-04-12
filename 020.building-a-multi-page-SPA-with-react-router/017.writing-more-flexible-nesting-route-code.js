/*

    Writing More Flexible Nested Routes Code

    When creating nested routes we usually need to repeat the root route again however, if there is any change
    in the root route path we need to make changes elsewhere as well. To avoid doing this there is a hook
    which can be used to avoid the copy-paste and the spelling mismatch.
    We can use the hook useRouteMatch(). This hook gives details about the path and the params. This hook is used to
    create nested routes easily. -> example 1
    UseRouteMatch() provides with the attributes url, params, path.
    We do not have to create the string instead we extract it from the existing route definition.

    useLocation hook can also be used to know the current location of the page on which the user is present.

    Url and query params can also be passed as an object to history.push to describe the target destination ->
    example 2
    The object takes a pathName where we want the user to navigate to and the search key that allows to add query
    parameters.

    example 1
    const match = useRouteMatch()
    console.log(match)

    <Route path={`/quotes/${params.quoteId}`} exact>
        <div>
            <Link to={`/quotes/${params.quoteId}/comments`}>
                Load Comment
            </Link>
        <div>
    </Route>
    <Route path={`${match.path}/comments`}>
        Comments
    </Route>


    example 2
    history.push({
        pathname: location.pathname,    //For current page
        search: `?sort=${(isSortingAscending ? "desc" : "asc")}`
    })

 */