/*
    Provider Setup

    When working with react redux library we are looking for 2 things:
        1. A Provider: that wraps our whole application
        2. Connect function: in each of the component that will help us to access the
           info. The info is the store along with the initial Store and the dispatch
           method. and then we can add in whatever actions we would want to pass.

    The setup is similar to Context API.

    We wrap the  whole application in <Provider>. There are two ways to do so:
        1. To wrap the <App> in index.js with the <Provider>
        2. To wrap the function App components with the <Provider> --> as all our
        components which are going to be rendered here are in this root component
        then we can wrap <Provider> in APP.js function

    <Provider> takes one property without which it will throw an error --> example 1
    The store property allows the app access and run the dispatch method, action method
    and the state.
    


Example 1:
<Provider store={store}>
    <main> </main>
</Provider>
 */