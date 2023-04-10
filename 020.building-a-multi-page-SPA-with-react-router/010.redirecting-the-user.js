/*

    Redirecting the User

    If we click on / we do not see any page and at the same time we are not redirected to any page, for such situations
    we use the component redirect.
    To solve this problem we create a route with path / and pass a react router component Redirect in it.
    As the name suggests this component redirects the individual to some other page. This route must contain the word
    exact as it matches with the exact same route and later only then redirects or else it can create an infinite loop.

    It is always a good practise to redirect users to some other page then leaving the route undefined as it can lead
    to errors and confusion.

 */