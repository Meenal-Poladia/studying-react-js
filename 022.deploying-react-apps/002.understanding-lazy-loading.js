/*

    Understanding lazy Loading

    Lazy loading means loading certain pieces of code only when it is needed.
    The idea behind lazy loading is that we load certain components in the end only when they're needed instead of
    ahead of time.

    To add lazy loading we need to first delete the import of the component from the Routing page. Inside the route
    we get access to the loader property on which we get a callback function in which we can import the component
    which we want to render. -> example 1

    After loading the component we are loading the loader function after the promise is successful. Once the loader is
    downloaded we can then download the component to render it. As import returns a promise and cannot be used as a
    regular function it needs to be wrapped inside a lazy KW which loads the component lazily.
    We wrap the Blog component inside the Suspense element till the component is ready for rendering the fallback
    component is rendered.

    If we want to pass a param inside the loader then we use the following construct. -> example 2

    example 1
    import {lazy, Suspense} from "react";

    const BlogPage = lazy() => import("./pages/Blog");

    {
        index: true,
        element:
        <Suspense fallback={<p> Loading.. </p>}>
            <BlogPage/>
        </Suspense>,
        loader: () => import("./pages/Blog")
                .then((module) => module.loader())
    }

    example 2
    {
        index: true,
        element:
        <Suspense fallback={<p> Loading.. </p>}>
            <PostPage/>
        </Suspense>,
        loader: (meta) => import("./pages/Post")
                .then((module) => module.loader(meta))
    }

 */