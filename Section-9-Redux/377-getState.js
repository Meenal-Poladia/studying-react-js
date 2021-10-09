/*
    getState

    When we create a store in Redux we get access to a method getState function.
    This function gets back our state. --> example 1


example 1
//initial store
const initialStore = {
    count: 0;
}

//reducer function
function reducer (state, action) {
    console.log({state, action})
}
const store = createStore(reducer, initialStore);
console.log(store.getState());

function App() {
    render() {
        return (
            <Navbar cart={store.getState()} />
        )
    }
}

 */