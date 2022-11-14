/*

    Building and using context provider component

    To ensure that our app component does not get polluted with the code for context hook we can keep our concerns
    seperated. This helps us to manage the entire context state in the separate context provider component.

    We can take all the logic from the component along with all the states, useffect and manage it in a different
    component i.e AuthContextProvider component.
    This structure is leaner and cleaner than adding logic to the component.

    The context created can later be consumed using the useContext hook.

    example -
    // We create a directory called store -> auth-context
    const AuthContext = React.createContext({
        isLoggedIn: false,
        onLogin: () => {}
        onLogout: (email, password) => {}
    })

    //creating a central place for all the context logic
    export const AuthContextProvider = (props) => {
        const [isLoggedIn, setIsLoggedIn] = useState(false);

        const logoutHandler = () => {}

        const loginHandler = () => {
            setIsLoggedIn(true);
        }

        return <AuthContext.Provider
            value= {{
                isLoggedIn: isLoggedIn,
                onLogin: loginHandler,
                onLogout: logoutHandler
            }}>
            {props.children}
        </AuthContext.Provider>
    }
    export default AuthContext;

    //Consuming the context component to the App
    <AuthContextProvider>
        <App/>
    </AuthContextProvider>
 */