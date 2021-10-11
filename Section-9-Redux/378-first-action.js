/*
    First Action

    In redux we can use the dispatch method to send actions to the store.
    Action is the 2nd parameter in the reducer function, in actions there is an object
    with the property type: which takes string as its value only.

    In react we cannot mutate the state. We need to make a copy and later return the
    copy.
    store.dispatch is the object that we create for writing our actions. It is important to
    specify the type property in the dispatch object. Type property takes a string which is
    usually is written in capital letters.
    After specifying the type in the store, we write a conditional statement in the reducer
    so that we can perform the action when the action is dispatched. --> example 1

    {} --> this means that a new Object is created in the memory heap.
    "" --> this means that a new String is created in the memory heap.


example 1:
//initial store
const initialStore = {
    count: 0;
}

//reducer function
function reducer (state, action) {
    console.log({state, action})
    if(action.type === "DECREASE") {
        state.count = state.count - 1             //Wrong. As we are mutating the state directly. State is immutable
        return {count: state.count - 1}           //Correct. we are creating a new state. Creating a new object.
    }
}
const store = createStore(reducer, initialStore);
store.dispatch({
    type: "DECREASE",
})

function App() {
    render() {
        return (
            <Navbar cart={store.getState()} />
        )
    }
}

 */