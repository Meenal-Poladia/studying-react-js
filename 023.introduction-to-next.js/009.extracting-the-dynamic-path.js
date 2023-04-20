/*

    Extracting the Dynamic Path

    To extract the concrete value entered in the URL when the page is loaded in nextJs we get a special hook which
    we can use. We can use this hook only in functional components.

    It also has an alternative for a class-based components a higher order component which we can wrap around your
    component.

    We import a sub package from next/router called useRouter which exposes routing specific functionality.
    useRouter returns an object which we can use inside the functional component.

    example
    import {router} from "next/router";

    const function() {
        const router = useRouter();

        console.log(router.query.newsId(Identifier Name));
    }

    At first the identifier name is undefined because when the page gets rendered for the first time it has not found
    the url but once found it re-renders again and finds the route name.

    This Id can be send to the backend API to fetch the page.
    That is how we can build dynamic pages which work for different pieces of data and then we can do different things
    based on different pieces of data.

 */