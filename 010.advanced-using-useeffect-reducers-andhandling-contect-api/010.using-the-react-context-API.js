/*

    Using the react context API

    React context helps us to manage state in a way that we are able to pass a particular prop from root component to
    any other component without the hassle of passing it down the chain.

    React.createContext is used to create the context object. The object is returned and can stored in a variable.
    We need to wrap the context in the JSX code so that the React app knows that this context needs to be provided
    to the entire application. Any component which is not wrapped will not be listened by the react app. If we need the
    data in the entire app then we wrap it inside the App component. However, if we need it in the login component
    then we wrap it to the login component.
    By wrapping the component we get access to the context in all the children of that component.

    For consuming the context we need to wrap the component which needs the values with the consumer context. The
    consumer context returns a function which consist of the component code along with the context object. We can send
    a state in the Provider as well rather than a static value.


    example
    // We create a directory called store -> auth-context
    const AuthContext = React.createContext({
        isLoggedIn: false
    })
    export default AuthContext;

    //wrapping the app component with the created context - Provider
    import AuthContext

    <>
        <AuthContext.Provider
         value={{
            isLoggedIn: stateFromTheComponent,
         }}
        >
            <App>
        </AuthContext.Provider>
    </>

    //Consumer of the AuthContext in the child component
    <AuthContext.Consumer>
    {(ctx) => {
        return (
            <Code of the child component>
            <ctx.isLoggedIn>
        )
    }}
    </AuthContext.Consumer>

 */