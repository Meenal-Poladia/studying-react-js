/*

    Using Switch And Case For Configuring Routes

    By default in react the routes are not parsed in a way that only one of them is loaded at the sametime.
    But instead all routes that match with the current path will be loaded.

    Both paths with /products and /products:id are active at the same time as both have the same initial path /products.
    Sometimes we can have the product id page below the product page but there will be times when we want to navigate
    the product id and its details on the new page.

    We can use the Switch component by react router dom to open the product details page on the new tab.
    Wrapping the routing in the <Switch> </Switch> will only let one route be active at the same time and only that
    route will be matched first.

    React router dom goes from the beginning of the routes and sees the first match word and displays the route
    without matching the entire route. So, it views only the /products page all the time and ignores
    /products/:id page.

    We add another prop here on this route. The exact prop. This tells React router, that this should only lead to a
    match if we have an exact match.
    So then it switches from matching the beginning of the path, with this path to matching the full path.

 */