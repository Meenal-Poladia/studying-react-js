/*
    Return and Action Bugs

    1. We can return anything we want from the reducer but we have passed a number as
    a key in the initial state and later if we set it as a string then we get an
    error. So, if the action.type does not match then we should always return the
    old state.

    2. If our action.type passed in the store.dispatch does not match the action.type in the
    reducer function then then will be no error message and the old state will be returned if
    we have passed to return the old state.


example 1:
const initialStore = {
    count: 0;
}

//reducer function
function reducer (state, action) {
    console.log({state, action})
    if(action.type === "DECREASE") {
        return {count: state.count - 1}           //Correct. we are creating a new state. Creating a new object.
    }
    return state
}
const store = createStore(reducer, initialStore);
store.dispatch({ type: "DECREASE" });
store.dispatch({ type: "INCREASE" });        // We have not defined it but it is still dispatched successfully.

 */