/*

    Preventing function re-creation with useCallback

    We can make React Memo work for prop values that are objects as well using useCallback hook.

    useCallback is a hook that allows us to basically store a function across component executions. This allows us to
    tell React that we wanna save a function and that this function should not be recreated with every execution. This
    function is saved in the same place in the memory so the comparison does work.

    useCallback will save the function somewhere in React's internal storage and we'll always reuse that same function
    object then when this component function executes.

    Using useCallback is simple as we just need to wrap the function with the useCallback hook and pass our function as
    a first argument to useCallback and useCallback then returns that stored function and when the app function reruns
    useCallback will look for that stored function which React stored for us and reuse that same function object.

    useCallback takes a second argument, an array of dependencies like useEffect. The dependencies are used similarly
    to useffect.
    Empty array of dependencies tells React that this callback function which we wanna store it will never change
    that it has no dependencies and the data for it will always remain the same function object and so should be reused
    when the app component re-renders.

    example -
    const toggleParagraphHandler = useCallback(() => {
        setState((prevState) => !prevState)
    })

 */