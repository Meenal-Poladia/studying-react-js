/*

    Using Custom Hook

    We use a custom hook just as we use the build-in hooks. We are just calling it like a function because it is a
    function.
    At first we need to import the hook in the component in which we want to use it. Just like other hooks we call
    the useCounter hook.

    If we call the useCounter hook in a particular component then it will be tied to that component itself.
    If we use a custom hook in multiple components every component will receive its own state. So just because we use
    a custom hook does not mean that we share state or effects across components. Instead for every component
    the custom hook is executed again and every component instance then receives its own state. Thus, it is the logic
    which is shared and not the concrete state.

    We need the counter state from the useCounter function to render on the screen. Just like all other hook, custom
    hooks can also return a value or whatever we want. Since the hook returns something we can store it in a
    variable.

    example
    hooks -> use-counter.js

    import {useEffect, useState} from "react"

    const useCounter = () => {
        const [counter, setCounter] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
                setCounter((prevCounter) => {
                    prevCounter + 1
                }, 1000);
                return () => clearInterval(interval);
            })
        }, [])
        return counter
    }

    //Consumption of the hook
    import {useCounter} from hooks;

    const someComponent = () => {
        const counter = useCounter();

        return (
            <>
                <p>{counter}</p>
            </>
        )
    }

 */