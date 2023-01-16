/*

    Working with multiple state slices

    It is a good practise to separate our concerns. Thus, states that focus on a particular concern should be grouped
    together than other states which relate to another concept like authentication and counter count. ->
    example 1

    It is important to note that even when working with multiple slices we have only one redux and still can only call
    configureStore once and this store only has one root reducer. The reducer in the configureStore can take an object
    which acts as an map of reducers where we can have any map name of our choice and the path of the reducer as the
    value. These individual reducers will be merged in one main reducer which is exposed to the store. That's how we
    can combine multiple slices and their reducers.

    This also leads to change in the way we access data from the store -> example 2
    First .counter, we make React Redux aware of the fact that we want to dive into this slice produced by this
    slicer's reducer and then in the state slice, which we simply have a property named counter.

    example 1
    const initialAuthState = {
        auth: false
    }

    const authSlice = createSlice({
        name: "authentication"
        initialState: initialAuthState,
        reducer: {
            login(state) {
                state.auth: true
            }
            logout(state) {
                state.auth: false
            }
        }
    })

    const store = configureStore({
        reducer: {
            counter: counterSlice.reducer,
            auth: authSlice.reducer
        }
    })

    example 2
    const counter = useSelector(state => state.counter.counter)

 */