/*

    Components and states

    Everything comes down to state when it comes to re-rendering components and changing what's on the screen.
    So therefore components and their interaction with state is really a core aspect of React.

    React takes care of the component and state by attaching useState. Using useState we update the state
    and automatically attach it to the component. The value we pass to the useState is essentially only considered
    once. The first time ever when a component is rendered. React memorises the state and uses it as a default state
    when the component is initialised. Later as the state changes react updates the state and only when the component
    is removed from the DOM and attached again that the component takes the default state.

 */