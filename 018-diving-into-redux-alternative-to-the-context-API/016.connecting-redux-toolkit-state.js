/*

    Connecting Redux Toolkit State

    To use our slice, we first need to use the return value of calling createSlice. To get access to the store we need
    to pass it to the createStore function. -> example 1

    But if we have a bigger application with multiple state slices then we could face problems as we can have only one
    reducer passed on to the store. ConfigureStore like createStore creates a store and makes merging multiple reducers
    into one reducer easier.
    We pass an object to the configureStore where we can set a reducer property. -> example 2

    If we would have multiple reducers then we would create the reducer value as an object and set the K-V as
    any reducer name and value as the reducer path -> example 3
    So we would create a map of reducers.  This map is then set as a value for the main reducer and behind the scenes
    configureStore will emerge all those reducers into one big reducer.

    example 1
    const initialState = {
        counter: 0,
        showCounter: true
    }

    const counterSlice = createSlice({
        name: "counter",
        initialState: initialState,
        reducer: {
            increment(state) {
                state.counter++
            }
            decrement(state) {
               state.counter--
            }
            increase(state, action){
                state.counter = state.counter + action.amount
            }
            toggle(state) {
                state.showCounter = !state.showCounter
            }
        }
    })

    const store = createStore(counterSlice.reducer);

    example 2
    //Single reducer
    const store = configureStore({
        reducer: counterSlice.reducer
    })

    example 3
    //Multiple reducer
    const store = configureStore({
        reducer: {
            counter:counterSlice.reducer,
            auth: authReducer.reducer
        }
    })
 */