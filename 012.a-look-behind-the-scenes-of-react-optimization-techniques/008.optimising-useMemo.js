/*

    Optimising useMemo

    Sometimes it might happen that the component is re-evaluated or re-rendered but we do not want every piece of code
    in the component to be re-evaluated especially if the work is performance intensive like sorting an array.
    This can be solved using the useMemo hook.

    useMemo basically allows us to memoize, which means it allows us to store, any kind of data we want to the store
    just like useCallback which does it for functions. -> example 1
    useMemo takes a callback which includes the logic about the code and we need to return it. As an second argument,
    it takes an dependency array in which we update the value which is being used inside the function.

    If the the array is being generated from the parent component and being passed down to the child then if it is
    being re-evaluated again then we can wrap the passed value in the useMemo hook as well and wrap it in empty
    dependency array if the array is only being consumed once.

    Usually we would use useCallback and not useMemo as we would need to memoize the entire function. Task like
    calculation or which are performance intensive are usually wrapped using useMemo hook.

    example 1
    const sortedList = useMemo(() => {
        const {items} = props
        return items.sort((a, b) => a - b)
    }, [items])

 */