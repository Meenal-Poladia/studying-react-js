/*

    useCallback and dependencies array

    useCallback allows us to save a function so that we can reuse it. useCallback works on the closure principle of
    javascript.
    In the below example when the component runs for the first time the toggleParagraphHandler function is run and
    saved in the memory however, its state is dependent on changeStateHandler function so when the state updates we
    want react to know that the value of the state in toggleParagraphHandler must be updated. The dependency array helps
    us to update the state in the function. Wherein if the value in the dependency array changes react updates the
    value in the useCallback function as well. So, the old value in the memory is updated to a new one.

    In useCallback the dependency array is crucial as it is responsible for updating the state with the latest
    value which enables us to get the most recent value while using the function.

    example -
    const [state, setState] = useState(false);

    const toggleParagraphHandler = useCallback(() => {
        if(state) {
            setState((prevState) => !prevState);
        }
    }, [state])

    const changeStateHandler = () => {
        setState((prevState) => !state);
    }

 */