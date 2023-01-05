/*

    Adding State Slices

    To install redux tooltip we use npm install @reduxjs/toolkit. If we install redux tooltip then we can uninstall
    redux from dependencies as redux is already included in redux tooltip.

    In useReducer we import createSlice from redux tooltip. CreateSlice prepares a slice of our global state.
    When we have different pieces of state which are not directly related, for eg: authentication status and the
    counter status, we could create different slices potentially also in different files to make our code maintainable.
    CreateSlice function takes an object with a name property along with the state values. -> example 1
    The third K-V is that of the reducer in which we write the action type and it is works as a function. Each
    action.type gets the updated state. So, we dont need to write switch case or if checks for checking the
    action.type.

    Inside the reducer we can change the state which we want to mutate without thinking about other states because
    Redux toolkit internally uses another package, called imgur, which will detect code like this and which will
    automatically clone the existing state, create a new state object, keep all the state which we're not editing and
    override the state which we are editing in an immutable way. Thus, we as developer have less to worry about other
    state while changing just one state in the initialState.

    The reducers still get the state and the action which allows us to access the payload.

    example 1
    const initialState = {
        counter: 0,
        showCounter: true
    }

    createSlice({
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

 */