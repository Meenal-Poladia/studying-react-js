/*

    Working with state

    State is actually not a React specific concept but it is a key concept in React as well.

    In React we can use the function useState which is provided by the React library. This function allows us to
    define values on state where changes to these values would reflect on the component function being called again,
    which is a key difference to the regular variable.

    useState is a react hook. All the react hooks should be used inside React component only and they start with the
    word use. useState takes two arguments initial value and the new value which we want to set.
    useState returns an array where the first value is the variable itself and the later is the updating function. We
    update the values by calling the function where we have access to the previous state values.

    By calling the setter function we are telling react that we want to change the state and assign it a new value
    which tells react that the component in which the state was registered with useState should be re-evaluated. So,
    react will go and execute the component again and then it will draw any changes which it's detects
    compared to the last time it evaluated this onto the screen.

    const [value, setValue] = useState(initialState);

 */