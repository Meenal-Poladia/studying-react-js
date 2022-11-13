/*

    Making context dynamic

    We can pass strings, objects and even functions using the context hook. This function is now available app
    wide to manage our state and manage the function that changes the state.

    In most cases, we will use props to pass data to components because props are our mechanism to configure components
    and to make them reusable. We use context only if we have something which we would forward through a lot of
    components and we're forwarding it to a component that does something very specific.

    Whenever we are adding a next context we need to also update it in the react.createContext object so our IDE
    correctly identifies and manages the context object.

    example -

     // We create a directory called store -> auth-context
    const AuthContext = React.createContext({
        isLoggedIn: false,
        isLogout: () => {}

    })
    export default AuthContext;


    import AuthContext
    const Component = () => {

        const logoutHandler = () => {
            setLogout(false);
        }

        return(
            <>
                <AuthContext.Provider
                 value={{
                    isLoggedIn: stateFromTheComponent,
                    isLogout: logoutHandler
                 }}
                >
                    <App>
                </AuthContext.Provider>
            </>
        )
    }

 */