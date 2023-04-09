/*

    Working with Nested Routes

    We are not limited to defining routes at one place only. We can define them wherever we want.
    If the component is currently active then the route on that component will be evaluated, if the page is not
    active then the route will not be evaluated.

    We can never be active for a route on which page we are not present.
    For eg: If we are on page /welcome then we cannot activate only routes of /welcome and not /products.

 */