/*

    Another Look At State In React Apps

    Redux is a state management system for cross-component or app-wide state. It helps us to manage state, data that
    changes and affects our application and what we display on the screen.
    It helps us manage such data across multiple components or even the complete app.

    The main idea of redux is exactly the same as for the context API, setting up of the state in the app level. So
    multiple components have access to the state and as a result we can avoid prop drilling or passing down the props
    through the components that actually don't need them.

    Redux can not only be used with ReactJS but can also be used with Angular or Vue. Redux is responsible for only
    storing the data on its own and giving us methods to update the data.

    The state of redux can be of 3 main types:
        1. Local state
        2. Cross component
        3. App-wide state

   1. Local State: State belongs to a single component. eg: Listening to user input in a input field. Typically, this
      state inside the component is managed by useSate() or if it is complex then we use useReducer().

   2. Cross component: State that affects multiple component. eg: Opening and closing of modal overlay. Thus,
      multiple components work together to show and hide the modal. We can manage the state via useState or useReducer
      but additionally we also require props.

   3. App-wide state: State that affects the entire app (most/all) components. eg: user authentication.
      For cross-component and app-wide state passing around data and updating function props can become cumbersome
      though. Redux and React Context helps us to solve this problem.

 */