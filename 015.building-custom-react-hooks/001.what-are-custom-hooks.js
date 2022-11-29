/*

    What are custom hooks?

    Custom hooks are regular functions just as the built-in hooks, like use state which are also just functions, but
    they are functions which contain stateful logic.

    Unlike regular functions, custom hooks can use other React hooks, including other custom hooks like useEffect,
    useState, etc.

    With custom hooks, we can outsource logic, which we might be using in different components, which we can then call
    from all other various components.

    So, it is simply a mechanism of reusing logic, just as regular functions but with a special thing that in these
    custom hook functions can use React hooks and other hooks.

 */