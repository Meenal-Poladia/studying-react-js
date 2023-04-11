/*

    Working with query parameters

    Query parameters are special parameters which we find on some URL's at the end of the URL, while on some
    we have a question mark and then thereafter we have the parameter pairs, which basically passes extra data
    into the page when loaded.

    Regular route parameters are mandatory. Whereas query parameters are optional. -> example 1
    The question mark thing does not change the route matching. It has no impact on which route is matched.
    But whichever route is matched then has access to that query parameter data like a page has sorting functionality.
    So we can set a query param on the url for sorting and whenever the user clicks the link the sorting is initiated.

    We can use the useHistory hook to add query parameters in the url. example 2
    The useHistory hook gives us access to the history object that allows us to change and manage the URL. Using
    history.push re-renders the entire page again so that it goes to search for the path which needs to be rendered.

    To read the query parameter we use the useLocation hook. It gives us access to the location object which has
    information about the currently loaded page URL.
    Location returns an object which has the attribute of search which contains the details about the query parameter.

    URLSearchParams is a constructor function provided by javascript which gives us access to the query params,
    key and value pair. We can then extract the query parameter by key -> example 3

    example 1
    //Mandatory for navigation
    <Route path="/quotes/:quoteID">
    </Route>

    example 2
    Static query parameter
    history.push(`/quotes?sort=ascending`)

    Dynamic query parameter
    history.push(`/quotes?sort=` + action)

    example 3
    const queryParams = new URLSearchParams(location.search)
    const isSortingAscending = queryParams.get("sort") === "ascending"

 */