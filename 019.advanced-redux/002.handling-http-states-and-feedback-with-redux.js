/*

    Using action creator with thunk

    A thunk is simply a function, that delays an action until later, until something else finished. We could write an
    action creator as a thunk. To write an action creator, which does not immediately return the action object,
    but instead, returns another function which eventually returns the action.

    So that we can run some other code before we dispatch the actual action object that we did want to create.
    We do not create these methods ourselves as Redux toolkit automatically calls them for us. Every method in the
    reducers object, receives such an action creator, which is called, by using that reducer function name.

    In this function we return a function in which we dispatch an action. We can perform any asynchronous task or
    side-effect till we have not reached the reducer. Redux toolkit just does not accept an action object with type
    property but also accepts functions those are action creators and are dispatching an action.

    example - 1
    export const sendCartData = (data) => {
        return (dispatch) => {
        }
    }

    //Using the function
    dispatch(sendCartData(data))
 */