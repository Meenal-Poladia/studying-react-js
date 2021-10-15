/*
    Reducer

    Reducer function is used to update the store. It takes 2 arguments: state & action.
    State is the initial value or the state before update. Action is what happened in the
    application or what kind of update we want to make in the store.
    Reducer has two functionality either return the updated state if any changes need to
    be taken place or return the old state.

    Reducer passed in createStore is a function which takes 2 parameters: state and action.
    CreateStore also takes 2 arguments: reducer and initialStore/initialState.
    Always as a default we should return the old state.

    It it important to return the state as if there are no actions that took place then the
    old state will be restored


// Example 1
//initial store
const initialStore = {
    count: 0;
}

//reducer function
function reducer (state, action) {
    console.log({state, action})
}
const store = createStore(reducer, initialStore)
 */