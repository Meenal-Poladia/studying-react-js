/*

    Adding a first class based component

    Class based component starts with the keyword class. It is not a react concept but a javascript concept.

    Inside it we add a constructor method. It is used for initialisation. If we do not have any initialisation
    required then we removed the constructor method.

    We also add an render method. Render is just a specific method expected by React, which React will call when it
    finds a component being used. React calls the render method to find out what should be rendered to the screen.
    So the render method is in the end, is equivalent to the return statement in a functional component. In render we
    will return the result that should be rendered.

    In class based components we do not have direct access to the props like we do in functional components. Here, we
    import component from react and extend it to our class. The user class inherits from the component class.
    This component class, adds important functionality, to make our class work as a component. It adds the props
    property. This is only possible because we extend component.

    Class-based components can work together with functional components.
    However, in reality, we will most likely build a project by either sticking to just functional or to just
    class-based component.

    example
    import {Component} form "react";

    class User extends Component{
        // constructor() {
        //
        // }
        render() {
            <li className={classes.user}>{this.props.name}</li>
        }
    }

    export default User;

 */