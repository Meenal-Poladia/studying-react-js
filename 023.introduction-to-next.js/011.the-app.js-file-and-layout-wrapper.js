/*
    The "_app.js" file and Layout Wrapper

    If we want to add a particular layout to all our components we can add the layout component in each
    individual component but it can become cumbersome. In a application where we can have hundreds of components.
    At such times, the file _app.js file becomes important.

    This is a special file, which exists in the Pages folder, if it doesnt exist then we can create one as well
    with the specified content. -> example 1

    This special component acts as the root component NextJs will render. It receives props and uses object
    de-structuring to pull information out of the props and the information it pulls out there, is a component
    prop and a page prop.

    These props are passed into MyApp component automatically by NextJs, since NextJs is the thing using
    that specific component and component is a prop that holds the actual page contents that should be rendered.
    Component in the _app.js file will in the end be the actual page content of our different pages and it will
    change whenever we navigate from page A to page B.

    Thus, if we wrap the layout component around the app component then we do not have to wrap it around individual
    js files.
    Wrapping the components with the layout component means that our different page contents will be wrapped
    with this layout component.

    So whenever we have some component or some setting that affects all our pages we can utilize this _app.js file to
    easily add that without diving into dozens of files individually.

    example 1
    import '../styles/globals.css'

    function MyApp({ Component, pageProps }) {
      return <Component {...pageProps} />
    }

    export default MyApp

 */