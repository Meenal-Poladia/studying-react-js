/*

    useffect and dependencies

    useffect is not only helpful to run the data for the first time but also when certain data, typically some
    state or props are changed. useeffect is an important hook that helps us execute the code in response to something
    and this something could be component being loaded, state being changed or whenever an action is being performed.

    If we want the useffect to run only when the components load then we pass an empty array dependency. ->
    example 1

    If we want the useffect to run when a specific state changes then we add the state in the dependency array. ->
    example 2

    If we do not have the dependency array in the useffect then it runs everytime a component is re-evaluated. ->
    example 3


    example 1
    useffect(() => {
    },[])

    example 2
    useffect(() => {
    },[stateName])

    example 3
    useffect(() => {
    })

 */