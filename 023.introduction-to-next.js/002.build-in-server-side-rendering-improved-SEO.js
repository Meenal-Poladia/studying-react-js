/*

    Build in Server Side Rendering, improved SEO

    The most important key feature NextJS adds, is the built-in server-side rendering support.

    React is client side, JavaScript library, all that rendering happens on the client which means on the browsers
    of the users, it's not happening on the server and as a result, the actual HTML code, which is sent from the
    server to the client, when a user visits your page is pretty empty.

    If that page would be pre-rendered on the server or if that data fetching somehow could be done on the server,
    or when the request hits that server than users would not see the flickering loading state and search
    engines would see our page content. That's the problem server-side rendering solves.
    It allows us to pre-render react pages, react components on a server.

    NextJS has built-in server-side rendering. It automatically pre renders our pages. This is great for SEO
    and our users also have a better initial load experience because they don't have that initial flickering.

    After this initial load offered as initial request, we still get a standard React app running in the browser,
    a standard single page application even, subsequent navigation actions by the user. It is like a blend of
    client-side and server-side rendering.

 */