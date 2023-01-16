/*

    Migrating everything to redux tooltip

    createSlice automatically creates unique action identifiers for our different reducers. To access these identifiers
    we can use the object counterSlice.actions.increase and so on to match the method name we have in our createSlice
    function in the reducers area. These methods are called action creators as they will create action object for us
    where these objects already have a type property with a unique identifier. -> example 1
    So we as developers do not have to worry about creating action objects on our own and about coming up with unique
    identifiers and about avoiding typos.

    We can export our counterSlice.actions from the file and use the import in another file to call the action. ->
    example 2
    We execute this method because increment is a method which when executed creates a full action object with the type
    set to this automatically created unique action identifier. So we get a full action object automatically created.

    Any kind of data can be passed through payload from the dispatch action: string, boolean, object. The important
    thing to keep in mind is how we extract the value in the reducer. Behind the scenes redux will store the action
    we are executing as action.type and the other values passed to it as the payload. -> example 3
    So, in the reducer function to access the payload we use the convention action.payload because that is the name
    of the property which will hold any extra data we might pass in dispatch.


    example 1
    counterSlice.actions.increase()
    counterSlice.actions.increment()

    example 2
    export const counterAction = counterSlice.actions

    //usage in other component file for dispatching action
    const {counterAction} from "../store/index";

    const dispatch = useDispatch();
    dispatch(counterAction.increment());

    example 3
    dispatch({
        type: "increment",
        payload: 15
    })
 */