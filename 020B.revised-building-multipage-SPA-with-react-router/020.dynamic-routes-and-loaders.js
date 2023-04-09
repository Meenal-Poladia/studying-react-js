/*

    Dynamic routes and loaders

    The loader function does not get access to any hooks by the react but it does get access to the request and
    response object.

    When we are extracting data from the loader of the parent route, we use useRouteLoaderData in the nested
    component than using the useLoaderData().

*/