/*
    Store

    Store is a place to hold data

    A store is a single source of truth and a way for us to manage the state of our application.
    In order to get the store running, you'll need following three things:
        1. create store function from the redux
        2. a variable that will hold the value
        3. a reducer function
    --> example 1

    The createStore function takes reducer as its argument. The reducer is where all our code
    about the changing of the state goes. But to reduce the complexity in the code we pass a
    reference to the code where we store the store functionality. As the application grows the
    code in the reducer increases and thus a separate file is created to move all the code in it.


example 1:
import {createStore} from "redux";

function reducer() {
    console.log(`I am the state`);
}

const store = createStore(reducer);

function App () => {

}

 */