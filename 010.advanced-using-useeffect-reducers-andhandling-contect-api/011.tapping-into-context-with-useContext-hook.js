/*

    Tapping into context with useContext hook

    useContext hook allows us to tap into the context and listen to it.
    We need to import the useContext hook. It gives us a function in which we can point to the context we want to refer
    to. The function returns the stored values in the context .

    This is a elegant and easier way to consume the context

    example -
    import {useContext} from "react";

    const Navigation = (props) => {
        const values = useContext(AuthContext)

        return (
            <nav>
                {use values.properties here}
            </nav>
        )
    }


 */