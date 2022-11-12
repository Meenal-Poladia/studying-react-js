/*

    useReducer versus useState for state management

    We use useReducer when we have to update many state simultaneously and one state is dependent on another, in such
    a scenario useState becomes cumbersome.

    useState is the main state management tool which is great for independent pieces of data or states. It is great to
    use when the state updates are easy and limited to a few updates.

    If we have an object as a state or a more complex state then we might use useReducer hook. If we need more power
    over the states then we use useReducer hook.
    We should consider using useReducer if we are dealing with related pieces of data or states.

    There is no strict rule which suggests using useReducer or useState but when dealing with simple app  then useState
    is a good option as it saves the time for setting the useReducer setup.

 */