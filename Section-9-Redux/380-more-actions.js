/*
    More Actions

    We can add as many dispatch actions as we want. While creating new dispatch actions
    we need to take care that the reducer action.type should be === to the dispatch
    value in the store.dispatch.

    Important things to note:

    1. We need to make sure that we do not mutate the state directly as state is immutable.
    2. We should also return our old state in the reducer.


example 1:
const initialStore = {
    count: 0;
}

//reducer function
function reducer (state, action) {
    console.log({state, action})
    if(action.type === "DECREASE") {
        return {count: state.count - 1}           //Correct. we are creating a new state. Creating a new object.
    } if(action.type === "INCREASE") {
        return {count: state.count + 1}
    } if(action.type === "RESET") {
        return {count: 0}
    }
    return state
}
const store = createStore(reducer, initialStore);
store.dispatch({ type: "DECREASE" });
store.dispatch({ type: "INCREASE" });        // We have not defined it but it is still dispatched successfully.

 */
