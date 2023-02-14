/*

    Using UseEffect For Requests

    When we want to fetch data immediately after the page loads we use useEffect(). As it is a side effect we
    make the call in the useEffect as it does not affect all the other code on the main thread. -> example 1
    Here in the dependency we are adding the function itself as the dependency so that whenever a state in the
    function changes the function will be re-rendered. We alao add useCallback hook to the async function
    so that it returns a memoized callback. This means that it changes only when one of its dependencies are changed.


example 1
useEffect(() => {
    fetchFunctionCall()
}, [fetchFunctionCall])

 */