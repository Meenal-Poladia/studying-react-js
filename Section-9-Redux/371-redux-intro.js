/*
    Introduction to Redux

    Redux is not a react library. It is an app-level state management library.

    The main idea of redux is exactly the same as for the context API, setting up of the
    state in the app level. So multiple components have access to the state and as a result
    we can avoid prop drilling or passing down the props through the components that
    actually don't need them.

    Redux can not only be used with ReactJS but can also be used with Angular or Vue. Redux
    is responsible for only storing the data on its own and giving us methods to update
    the data.

    In Redux, the Store is a single piece of truth and you can think of it as a global
    state in your react that in fact, terms, store and state are used interchangeably
    when covering redux.

    The major difference between react and context API is the way we can update our state.

    When it comes to redux, we cannot update store directly and that is not allowed. The way we
    update our store in Redux is by dispatching an action and you can think of actions as what
    we would want to do. Once you dispatch the action, you can handle it in reducer and reduce.
    There is nothing more than a function that takes the argument state and action.
    When it comes to state argument, you can think of it as an old state or state before action
    was dispatched. An action argument provides the info what type of action was dispatched.
    The key about reducers is that it does not mutate state directly.
    You should always should return a new state from reducer in register.
    We're going to handle what action is dispatched and update our new state appropriately.
    Once we return a state from reducer that becomes our new state and we can start all over.

    Here, we cannot directly update the UI, we need to dispatch an action plan that
    needs to go through the reducer and only the state that is a return from the reducer
    is our new state.

 */