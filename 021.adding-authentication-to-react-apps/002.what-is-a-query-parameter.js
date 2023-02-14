/*

    What is a Query Parameter

    A query parameter a parameter that's appended in the URL after a question mark. -> example 1
    The advantage of this query parameter is that we can link a user directly to the signup page even though it is a
    same page but just with different UI being rendered. -> example 1

    Rather than using a button on whose onClick we change the page being rendered. We use a Link element to navigate
    the user to the signup page -> example 2

    To know the details about the query parameters we can use the hook useSearchParams. useSearchParams returns an
    array. The first element is an object that gives us access to the currently set query parameters and the second
    value we get from that array is a function that allows us to update the currently set query parameters. ->
    example 3

    example 1
    www.domain.com/auth?mode=signup
    www.domain.com/auth?mode=signout

    example 2
    <Link to="mode=signup">
        Click here to sign up
    </Link>

    example 3
    const [searchParams, setSearchParams] = useSearchParams()
    const isLogin = searchParams.get("mode") === "login";
 */