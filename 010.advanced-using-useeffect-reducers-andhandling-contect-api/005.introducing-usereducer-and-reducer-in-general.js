/*

    Introducing useReducer and reducer in general

    useReducer is a state management hook which is similar to useState hook but has more capabilities than useState
    hook and is useful for more complex state management.

    useReducer is a good use case when one state change leads to manipulating other states, or when two or more state
    are dependent on each other.

    If updating a state which depends on another state then merging this into one state could be a good idea ->
    example 1


    example 1
    setState(anotherState * 234);

 */