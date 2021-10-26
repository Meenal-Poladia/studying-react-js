/*
Class Based Components in React JS

    Class-Based components are more powerful than functional components because we can do
    all the same things we were doing with stateless functional components.However, we can
    also have something called state as well as the life cycle method.

    React hooks give the same functionality to functional components as state and life cycle
    method gives to class based components.

    The classes in ES6 are the syntactical sugar because in order to create a class based
    component, we are going to have to use the classes. Classes are the syntactical sugar for
    Constructor Functions.

    To build classes we use the subclass of components which means we will be extending from the
    component class which in real life means that we will be inheriting the functionality and
    the component class which is going to be used to transfer from the basic class to a
    proper component class.
    Component class transfers from basic ES6 class to a component class.

    We need to have the import React, {Component} from "react" to create a class based
    component.

    The word class is used to build a class based component so we need to use the term
    "className" for adding css to the elements. No repetition of keywords as it can lead to confusion.

    While creating a class there are 2 ways in which they can be constructed:
    1. class App extends React.Component {

    }
    Here, we are inheriting the component from React import.

    2. class App extends Component {

    }
    In this, we are just extending from the component. So, no need to import {Component} as a named
    import

    We have a render method inside the class which has a return. It is important to have the render method.


    example 1 - Class based component
    class App based Component {
        render() {
            return (
                <section>
                    <h2> I am a class based component </h2>
                <section/>
            )
        }
    }
 */