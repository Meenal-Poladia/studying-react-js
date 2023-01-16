/*

    Splitting our code

    If we have many state slices then our index.js would become a long file so it would be a better idea to split code
    into smaller pieces. -> example 1
    Except for the different slice files we should also have a root file index.js file where we merge all the other
    files. Rather than exporting the entire slice we can just export the reducer of the slice.

    Splitting the code makes is maintainable and easy to manage

    example 1
    store => counterSlice.js

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

    export default counterSlice.reducer;


    import counterReducer from "./counterSlice"

    const store = configureStore({
        reducer: counterReducer
    })

 */