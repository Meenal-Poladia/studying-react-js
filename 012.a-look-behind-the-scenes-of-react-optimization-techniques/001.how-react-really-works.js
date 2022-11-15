/*

    How react really works

    React is a javascript library for building user interfaces. React is all about components and we use components
    for building interfaces. ReactDOM is our interface to the web.

    ReactDOM is responsible for bringing something onto the screen which the user is then able to see. React cares
    about the data that is passed to it through props, the current state and the state that it needs to manage and the
    context which is component wide data. Whenever the props, state or the context changes the components that use these
    concepts are updated by React and react checks whether this component now wants to draw something new onto the
    screen. If that is the case then React will let ReactDOM know that ReactDOM needs to bring something new onto the
    screen.

    React uses a concept called as the virtual DOM which determines how the component tree currently looks like and
    how the component tree should look like once there is an update in state. This information is handed over by
    React to ReactDOM. ReactDOM receives the difference(ie. required changes) and then manipulates the real DOM to match
    that virtual DOM.
    Once a prop, state or context of a component changes that component is re-evaluated but this does not mean that the
    respective part of the actual real DOM is re-rendered. So, the real DOM is not changed all the time, it is only
    changed when the actual DOM and the virtual DOM is different. Changing the real DOM is a performance intensive task
    Re-rendering the entire page again and again makes the page load slow and hampers performance.

 */