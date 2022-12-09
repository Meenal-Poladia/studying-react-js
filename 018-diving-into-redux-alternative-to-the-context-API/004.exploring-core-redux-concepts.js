/*

    Exploring Core Redux Concepts

    To install redux in a project we use the command npm install redux. This command installs the dependencies which we
    require to run this package in the project.

    To set up redux on our project, we will need a store where all the states will be stored, a reducer function which
    transforms the logic to be stored in the store, an action file which captures the actions dispatched from the
    component.

    A store can be created by using the createStore function on the redux. -> example 1
    We pass the reference of reducer function to the store because the store needs to know which reducer function is
    responsible for changing the store.

    A reducer function returns the to be stored data and has an initial state which is setup when the app is run
    for the first time. Later the logic keeps changes according to the actions dispatched. Reducer function receives
    two parameters: the old state and the action that was dispatched. This reducer function returns a certain output
    to be stored in the store which is always an object. Reducer function is a pure function so it should not have any
    side-effects, http request or change something in local storage. -> example 2

    A subscription function subscribes to the store. It gives the latest snapshot of the store. It is triggered
    when the state is changes. The getState method gets the latest state from the store -> example 3

    The subscribe method on the store is executed whenever the state is changed. This method expects a subscriber
    function which will be executed whenever the data or the store changes. -> example 4
    We do not execute the reducerFunction or subscriberFunction and just pass a reference as redux executes them by
    itself.

    To initialise the process we need to dispatch an action. A dispatch is an method that dispatches an action which
    is a javascript object with a type property which acts as an identifier. -> example 5
    The identifier should be an unique string so that every action has its own distinct action which leads to different
    things being done in the reducer.


    example 1
    const store = redux.createStore(reducerFunction);

    example 2
    const initialState = {
        counter: 0
    }

    const reducerFunction = (state = initialState, action) => {
        return {
            counter: state.counter + 1
        }
    }

    example 3
    const subscriberFunction = () => {
        const latestStore = store.getState()
    }

    example 4
    store.subscribe(subscriberFunction);

    example 5
    store.dispatch({type: "increment"})

 */