/*

    Using Redux Data In Store Component

    To display the data in the store, we need access to the store from the component.
    We need to use the useSelector hook from the react-redux library in the component where we want to use the
    stored data. useSelector hook helps us to automatically select a part of our state managed by the store.
    In case of class based components we use the "connect" hook to retrieve data from the store.

    We need to create a function in order to retrieve the data. The function receives a state as a parameter and
    we try to get the part of the store through the function. We store the returned value in a variable -> example 1

    The useSelector hook automatically subscribes to the latest data which is stored in the store. Any change in the
    data will lead to re-execution of the entire component.

    If the component is unmounted then react-redux automatically unsubscribes the store.

    example 1
    const counter = useSelector(state => state.counter);

 */