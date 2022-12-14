/*

    Providing The Store

    To provide the store to the react app. We go to the index.js file of the project. We need to import the store to
    the highest level of the application component where we render this to the root.

    We import {Provider} from react-redux which is a component. We wrap the App component with the Provider
    component. We wrap the highest level component with Provider so that all the child component inside it have
    access to the store.

    We need to specify the store which we want to provide in the Provider component. The store needs to be specified in
    the store attribute.
    Once the store is set we can add data to the store, retrieve data and also manipulate data from any component which
    are a child of App.js.

    example -
    root.render(
        <Provider store={}>
            <App/>
        <Provider/>
    )

 */