/*

    How Redux works

    Redux is all about having one Central Data Store, in the application and with data means state.

    This one store handles all the states of the entire application. This store is accessed from inside the components.
    Whenever the data in the store changes the store notifies the component about it and the component receives the
    latest state update.

    Components do not directly manipulate the store. Reducer functions are created to change the data in the store.
    Reducer functions are functions which take some input and then transform that input into a new output.
    Reducer functions are responsible for updating the store.

    Components trigger certain actions. These actions are forwarded to the reducer and the reducer applies the logic
    and stores the data in the store.

 */