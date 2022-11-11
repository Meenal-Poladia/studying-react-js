/*

    Using useReducer hook

    useReducer just like useState, always returns an array with exactly two values and therefore we can use array
    destructuring as we did it with useState to pull out these values and store them in separate constants.

    const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);

    state: The state snapshot used in the component re-render/re-evaluation cycle.

    dispatchFn: A function that can be used to dispatch a new action(i.e: trigger an update of the state). The action
    dispatched from here will be consumed by the reducerFn. dispatchFn takes an object with an understandable identifier
    and can also add an extra payload. Payload is optional argument

    reducerFn: This function gets 2 arguments: (prevState, action). A function that is triggered once an action is
    dispatched (via dispatchedFn) - it receives the latest state snapshot and should return the new updated state.
    React will call this reducerFn whenever a new action is dispatched. It gets the last state snapshot managed by react
    and the action dispatched. reducerFn returns the new state snapshot.
    This reducerFn can be created outside of the component function as it doesnt need to interact with anything
    defined inside of the component function. All the data which will be required and used inside of the reducerFn
    will be passed into this function when its executed by react

    initialState: It is the initialState.

    initFn: A function to set the initialState if the state is too complex or the result is from some http request.

    To use useReducer we need to first import it from react.
    import {useReducer} from "react";


    example 1:
    const reducerFn = (state, action) => {
        if(action.type === "INPUT_EMAIL") {
            return {
                value: action.value,
                isValid: action.value.includes("@")
            }
        }
        if(action.type === "INPUT_BLUR") {
            return {
                value: state.value,           //Accessing the last state value
                isValid: action.value.includes("@")
            }
        }
        //Default state when nothing above works out
        return {
            value: "",
            isValid: false
        }
    }

    const myComponent = () => {
        const initialState = {
            value: "",
            isValid: false
        }

        const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);

        const howToAccessState = () => {
            setSomeState(reducerFn.isValid)
        }

        const dispatchingAnAction = () => {
            dispatchFn({type: "INPUT_EMAIL", value: e.target.value})
        }

        const anotherDispatch = () => {
            dispatchFn({type: "INPUT_BLUR"})
        }
    }

 */