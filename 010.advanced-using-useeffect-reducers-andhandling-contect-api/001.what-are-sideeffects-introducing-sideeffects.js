/*

    What are side effects introducing side effects

    The word effect and side-effect are used interchangeably.
    Some example of side effects are making a http call, storing data in the storage or managing timers. All these
    tasks are not related to showing something on the screen but related to the application which affect the
    application.

    These tasks are called as side effects.

    useEffect hook handles the side effects in react. useffect hook takes 2 arguments. The first is the function which
    will be executed after every component re-evaluation if the specified dependencies change. The second is the
    effect function which only runs if the dependencies changed.

    For example -
    useEffect(() => {
    first argument
    }, [second argument])

 */