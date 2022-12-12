/*

    More redux basics

    When using Redux the goal is to do different things inside of the reducer for different actions so we have the
    action as the second argument in the reducer function.

    If the condition does not matches then we pass in the default state. Similarly we can dispatch as many actions as
    we want. It is a good practise to always have a fallback return if neither of the actions are matched.

    example -
    const initialState = {
        counter: 0
    }

    const reducerFunction = (state = initialState, action) => {
        if(action.type == "increment") {
            return {
                counter: state.counter + 1
             }
        }
        return state
    }

 */