/*

    How To Work With Redux Store Correctly

    In reducer we return a brand new state object which Redux will use to replace its existing state with. So the
    objects which we return in the reducer will not be merged with the existing state. They will overwrite the existing
    state.
    When we do not redefine other states they are considered as undefined and undefined is considered as falsy so
    the other states do not work. This is an error.

    We must set all the states when we update any one state because we overwrite the old state.
    It is important that we should never mutate the original state, rather overwrite it by returning a brand new
    state object.

    example 1
    const initialState = {
        counter: 0,
        amount: 100,
        amount: 0
    }

    const reducer = (state = initialState, action) => {
        return {
            ...state,
            amount: state.amount + action.amount
            counter: state.counter + 1
        }
    }

 */