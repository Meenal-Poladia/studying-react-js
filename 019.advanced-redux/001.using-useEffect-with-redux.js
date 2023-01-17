/*

    Using useEffect with Redux

    If we want to update the backend whenever a particular state changes then we can use useEffect in the App.js
    where we pass dependency of the state on which we want the useEffect to run. As there is a direct subscription of
    the store with the components, when the latest state is received from the store the useEffect runs the
    necessary logic.

    This keeps our side effect logic in the component and the data transformational logic in the reducer when working
    with redux.

 */