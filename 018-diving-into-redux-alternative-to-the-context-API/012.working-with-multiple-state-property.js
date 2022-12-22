/*

    Working With Multiple State Property

    It is a good practise to create an initial state as an object and attach it to the state in the reducer,
    than mentioning all the states inside the state function in the reducer function. -> example 1

    Whenever we are setting one of the value in the initial state we need to make sure that we need to first
    spread the previous values so that they remain unchanged and then declare the new value. If we return just the
    new value then all the other values are lost in the process.

    example 1
    const initialState = {
        counter: 0,
        amount: 100
    }

    const reducer = (state = initialState, action) => {
        return {
            ...state,
            counter: state.counter + 1
        }
    }

 */