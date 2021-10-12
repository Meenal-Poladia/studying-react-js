/*
    More complicated state

    If we have more value in the store but we want to mutate just one then we use:
        1. Object.assign to create a copy of the state
        2. We use the spread operator --> example 1


example 1:
const initialStore = {
    count: 0,
    name: "John";
}

//reducer function
function reducer (state, action) {
    console.log({state, action})
    if(action.type === "DECREASE") {
        return {...state, count: state.count - 1}
    } if(action.type === "INCREASE") {
        return {...state, count: state.count + 1}
    } if(action.type === "RESET") {
        return {...state, count: 0}
    }
    return state
}
const store = createStore(reducer, initialStore);
store.dispatch({ type: "DECREASE" });
store.dispatch({ type: "INCREASE" });

 */