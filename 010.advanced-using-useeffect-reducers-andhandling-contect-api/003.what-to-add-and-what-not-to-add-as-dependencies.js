/*

    What to add and what not to add as Dependencies

    There are few exceptions that cannot be added to the dependency array.
        1. State updating functions
        React guarantees that those functions never change, hence you don't need to add them as dependencies
        example - setPassword

        2. Build-in APIs or functions like fetch or localStorage (functions and features built-into the browser and
        hence available globally)
        These browser APIs / global functions are not related to the React component render cycle and they also never
        change
        example - setTimeout

        3. Functions or variables defined outside the component (e.g. if we create a new helper function in a separate
        file)
        Such functions or variables also are not created inside of a component function and hence changing them won't
        affect our components (components won't be re-evaluated if such variables or functions change and vice-versa)

        We must add all "things" we use in your effect function if those "things" could change because our component
        (or some parent component) re-rendered. That's why variables or state defined in component functions, props or
        functions defined in component functions have to be added as dependencies!

 */