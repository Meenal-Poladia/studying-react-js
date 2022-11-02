/*
    Using Stateful Lists

    If we want to add new data to the existing list then we create a state which stores the initial state and
    use the setter to add new state making sure that the current data is not deleted but only added.
    We can use destructuring in the setter for preserving the previous state.

    Spread Operator works also on arrays.

    For example -
    const [expenses, setExpenses] = useState(INITIAL_DATA);

    setExpenses((previousState) => {
       return [...previousState, newData];
    })

 */