/*
    Creating a custom react function

    Whenever we have code duplication in programming, we typically want to refactor it and create a function which
    holds the shared code.

    Custom react hook uses react hooks like useState and useEffect, and it updates the state by calling
    the state updating function. We have learned that we are not allowed to use these react hooks in any random
    function. They must only be used in react component functions or custom hooks.

    So, if we wanna outsource that logic into a separate function, we need to build such a custom hook.
    Just as with components, we store every hook in a standalone file. -> example 1

    The function which we create in this file should start with the use keyword like all other hooks.
    It will be a normal function in the end but the use at their beginning signals to react that it will be a custom
    hook and it gives react guarantee that we will use state function by respecting these rules of hooks so
    that we will use this custom hook function just as we use the build in hooks.

    We export the file as we will need to use it in some other file as well. We just copy the logic from other file
    into this file and do not touch the JSX code.

    example 1
    next to the component directory we create hooks directory
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
    }

    export default useCounter;

 */